<?php

namespace App\Http\Controllers\Vehiculo;

use App\Http\Controllers\Controller;
use App\Http\Requests\VehiculoRequest;
use App\Models\Ruta;
use App\Models\User;
use App\Models\Vehiculo\DetalleVehiculo;
use App\Models\Vehiculo\ProgramacionRuta;
use App\Models\Vehiculo\Vehiculo;
use App\Models\Zona;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class VehiculoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() : Response
    {
        return Inertia::render('Vehiculos/Index', [
            'vehiculos' => Vehiculo::with('detalle')->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Vehiculos/Create', [
            'zonas' => Zona::where('sw_estado', Zona::ACTIVO)->get(),
            'conductores' => User::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(VehiculoRequest $request)
    {
        $datos = $request->all();
        $vehiculo = Vehiculo::create($datos);

        $datos['cod_vehiculo'] = $vehiculo->id;
        $detalle = DetalleVehiculo::create($datos);

        $programar = ProgramacionRuta::create($datos);

        return redirect(route('vehiculos.index'));
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
        $vehiculo = Vehiculo::with(
            'detalle',
            'programacion.ruta'
        )->find($id);
        $cod_zona = $vehiculo->programacion->ruta->cod_zona ?? null;
        return Inertia::render('Vehiculos/Edit', [
            'vehiculo' => $vehiculo,
            'zonas' => Zona::where('sw_estado', Zona::ACTIVO)->get(),
            'rutas' => Ruta::where([
                'sw_estado' => Ruta::ACTIVO,
                'cod_zona' => $cod_zona
            ])->get(),
            'conductores' => User::all(),
            'cod_zona' => $cod_zona,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(VehiculoRequest $request, string $id)
    {
        $datos = $request->all();
        $vehiculo = Vehiculo::find($id);
        $vehiculo->update($datos);

        $detalle = DetalleVehiculo::updateOrCreate([
            'cod_vehiculo' => $vehiculo->id
        ], $datos);

        $programar = ProgramacionRuta::updateOrCreate([
            'cod_vehiculo' => $vehiculo->id,
        ], $datos);

        return redirect(route('vehiculos.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $vehiculo = Vehiculo::find($id);
        $vehiculo->delete();

        return redirect(route('vehiculos.index'));
    }

    public function buscarRutas(Request $request, $id)
    {
        $rutas = Ruta::select("id", "nombre as text")->where('cod_zona', $id)->get();

        return response()->json(["rutas" => $rutas]);
    }
}
