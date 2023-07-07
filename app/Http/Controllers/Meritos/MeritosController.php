<?php

namespace App\Http\Controllers\Meritos;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class MeritosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $rol = DB::table('usuarios_roles')->where('cod_usuario', Auth::user()->id)->get();

        return response()->json(
            [
                'user'=> Auth::user(),
                'rol'=> $rol,
                'listado_precio' => DB::table('listado_precios')->where('cod_rol',$rol[0]->cod_rol)->get(),
                'meritos_actuales' => DB::table('meritos_puntos')->where('cod_usuario', Auth::user()->id)->get(),
                'detalle_meritos' => DB::table('detalle_meritos_usuarios')->where('cod_usuario', Auth::user()->id)->get(),
            ]
        );
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
