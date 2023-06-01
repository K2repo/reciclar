<?php

namespace App\Http\Controllers\Ruta;

use App\Http\Controllers\Controller;
use App\Models\Material;
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
            'materiales' => Material::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Ruta/Create', [
            //
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'unidad_medida' => 'required|string|max:255',
            'descripcion' => 'required|string|max:255',
        ]);

        $material = new Material;
        $material->nombre = $request->nombre;
        $material->unidad_medida = $request->unidad_medida;
        $material->descripcion = $request->descripcion;
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
        return Inertia::render('Material/Edit',['material'=>Material::find($id)]);
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
