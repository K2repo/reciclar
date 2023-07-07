<?php

namespace App\Http\Controllers\Ruta;

use App\Http\Controllers\Controller;
use App\Models\Material;
use App\Models\Ruta;
use App\Models\User;
use App\Models\Vehiculo\Vehiculo;
use App\Models\Zona;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;

class RutaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() : Response
    {
        return Inertia::render('Ruta/Index', [
            //'materiales' => Ruta::all()
            //'materiales' => Ruta::with('zona')->join('ciudades', 'zonas.cod_ciudad','=','ciudades.id')->with('recolector')->get()
            'materiales' => Ruta::
                            selectRaw("rutas.id, rutas.nombre, fecha_programacion, zonas.nombre as zona,ciudades.nombre AS ciudad, users.name as recolector")
                            ->join('zonas', 'rutas.cod_zona','=','zonas.id')
                            ->join('ciudades', 'zonas.cod_ciudad','=','ciudades.id')
                            ->join('users', 'rutas.cod_recolector_1','=','users.id')
                            ->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Ruta/Create', [
            //
            'zonas' => Zona::where('sw_estado', Zona::ACTIVO)->get(),
            'conductores' => User::all(),
            'vehiculos' => Vehiculo::all()
        ]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        //dd($request->all());

        /*$validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'unidad_medida' => 'required|string|max:255',
            'descripcion' => 'required|string|max:255',
        ]);*/

        $material = new Ruta;
        $material->fecha_programacion = $request->fecha_programacion;
        $material->cod_zona = $request->cod_zona;
        $material->cod_vehiculo = $request->cod_vehiculo;
        $material->cod_recolector_1 = $request->cod_recolector_1;
        $material->cod_recolector_2 = $request->cod_recolector_2;
        $material->cod_recolector_3 = $request->cod_recolector_3;
        $material->sw_estado = 1;
        $material->save();
        return redirect(route('rutas.index'));
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
        return Inertia::render('Ruta/Edit',['material'=>Ruta::find($id)]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): RedirectResponse
    {
        //
        //$this->authorize('update', $material);

        $validated = $request->validate([
            //'message' => 'required|string|max:255',
            'nombre' => 'required|string|max:255',
            'unidad_medida' => 'required|string|max:255',
            'descripcion' => 'nullable|required|string|max:255',
        ]);

        //$material->update($request->id);

        $material = Material::find($id);
        $material->nombre = $request->nombre;
        $material->unidad_medida = $request->unidad_medida;
        $material->descripcion = $request->descripcion;
        $material->save();

        //dd($request->all(), $id);

        return redirect(route('materiales.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
