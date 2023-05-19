<?php

namespace App\Http\Controllers\Cliente;

use App\Http\Controllers\Controller;
use App\Http\Requests\ClienteRequest;
use App\Models\Cliente;
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
        return Inertia::render('Cliente/Edit', [
            'cliente' => User::with('rol')->find($id),
            'roles' => Rol::where('sw_estado', Rol::ACTIVO)->get(),
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
}
