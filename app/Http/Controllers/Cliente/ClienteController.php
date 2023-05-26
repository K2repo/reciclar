<?php

namespace App\Http\Controllers\Cliente;

use App\Http\Controllers\Controller;
use App\Http\Requests\ClienteRequest;
use App\Models\Ciudad;
use App\Models\Departamento;
use App\Models\Sistema\Rol;
use App\Models\Sistema\UsuarioRol;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ClienteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() : Response
    {
        return Inertia::render('Cliente/Index', [
            'clientes' => User::with('esCliente')->whereHas('esCliente')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Cliente/Create', [
            'roles' => Rol::where('sw_estado', Rol::ACTIVO)->get(),
            'departamentos' => Departamento::where('sw_estado', Departamento::ACTIVO)->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ClienteRequest $request)
    {
        $datos = $request->all();
        $cliente = User::create($datos);

        $roles = $request->input('cod_rol') ? [Rol::CLIENTE, $request->input('cod_rol')] : [Rol::CLIENTE];
        foreach ($roles as $rol) {
            UsuarioRol::updateOrCreate([
                'cod_rol' => $rol,
                'cod_usuario' => $cliente->id
            ],[ $datos ]);
        }

        return redirect(route('clientes.index'));
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
        $cliente = User::with('rol', 'ciudad')->find($id);
        $cod_departamento = $cliente?->ciudad?->cod_departamento;
        return Inertia::render('Cliente/Edit', [
            'cliente' => $cliente,
            'roles' => Rol::where('sw_estado', Rol::ACTIVO)->get(),
            'departamentos' => Departamento::where('sw_estado', Departamento::ACTIVO)->get(),
            'ciudades' => Ciudad::where([
                'sw_estado' => Ciudad::ACTIVO,
                'cod_departamento' => $cod_departamento,
            ])->get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ClienteRequest $request, string $id)
    {
        $datos = $request->all();
        $cliente = User::find($id);
        $cliente->update($datos);

        $roles = $request->input('cod_rol') ? [Rol::CLIENTE, $request->input('cod_rol')] : [Rol::CLIENTE];
        foreach ($roles as $rol) {
            UsuarioRol::updateOrCreate([
                'cod_rol' => $rol,
                'cod_usuario' => $cliente->id
            ],[ $datos ]);
        }

        return redirect(route('clientes.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): RedirectResponse
    {
        $cliente = User::find($id);
        $cliente->delete();

        return redirect(route('clientes.index'));
    }
       
    public function buscarCiudades(Request $request, $id)
    {
        $ciudades = Ciudad::select("id", "nombre as text")->where('cod_departamento', $id)->get();
        
        return response()->json(["ciudades" => $ciudades]);
    }
}
