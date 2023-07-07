<?php

namespace App\Http\Controllers\Material;

use App\Http\Controllers\Controller;
use App\Models\Ruta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;


class MaterialRecolectadoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('Perfiles/TenderoPuntoEco',
        [
            'materiales' => DB::table('materiales')->get(),
            'rutas' => Ruta::with('zona')->with('recolector')->get()
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $cod_ruta = $request->cod_ruta;
        $materiales_recolectados = $request->materiales_recolectados;
        $rol = DB::table('usuarios_roles')->where('cod_usuario', Auth::user()->id)->get();


        array_map(function ($length) use ($cod_ruta,$rol) {

            $precio_kilo = DB::table('listado_precios')->where('cod_rol',$rol[0]->cod_rol)
                                                ->where('cod_producto', $length['cod_material'])
                                                ->get();

            $precio_kilo = $precio_kilo->toArray()[0];

            DB::table('detalle_material_recolectado')->insert([
                'cod_programacion_ruta'=> $cod_ruta,
                'cod_usuario'=> 1,
                'cod_material'=> $length['cod_material'],
                'nombre'=> 0,
                'descripcion'=> 0,
                'cantidad_recolectada'=> $length['cantidad'],
                //'created_at'=> 0,
                //'updated_at'=> 0
            ]);
            //dd($precio_kilo);
            //dd(intval($length['cantidad'])*$precio_kilo->precio);

            DB::table('detalle_meritos_usuarios')->insert([
                'cod_usuario'=> 1,
                'cod_producto'=> $length['cod_material'],
                'saldo_cargado'=> (intval($length['cantidad'])*$precio_kilo->precio),
                'saldo_descontado'=> 0,
                //'created_at'=> 0,
                //'updated_at '=> 0,
            ]);

            //dd(DB::table('detalle_meritos_usuarios')->selectRaw("SUM(saldo_cargado-saldo_descontado) AS total_meritos")->where('cod_usuario',1)->get()->toArray()[0]->total_meritos);

            DB::table('meritos_puntos')->where('cod_usuario',1)->update([
                'item'=>0,
                'numero_puntos'=> intval(DB::table('detalle_meritos_usuarios')->selectRaw("SUM(saldo_cargado-saldo_descontado) AS total_meritos")->where('cod_usuario',1)->get()->toArray()[0]->total_meritos),
            ]);


        }, $materiales_recolectados);


        return Inertia::render('Perfiles/TenderoPuntoEco',[
            'data'=>['success', true ],
            'materiales' => DB::table('materiales')->get(),
            'rutas' => Ruta::with('zona')->with('recolector')->get()
        ]);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
