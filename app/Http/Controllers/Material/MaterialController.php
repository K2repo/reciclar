<?php

namespace App\Http\Controllers\Material;

use App\Http\Controllers\Controller;
use App\Models\Material;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;

class MaterialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() : Response
    {

        return Inertia::render('Material/Index', [
            'materiales' => Material::all()
        ]);
        //return view ()->width('Materiales', $materiales)

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Material/Create', [
            //
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        //dd($request->all());
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

        return redirect(route('materiales.index'));
    }

    //return response()->json(['Controller register material']);
    //return redirect('materiales');
    //$request->chirps()->create($validated);

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
        //dd($id);
        return Inertia::render('Material/Edit',['material'=>Material::find($id)]);

    }

    /**
     * Update the specified resource in storage.
     */
    //public function update(Request $request, string $id)
    public function update(Request $request, string $id): RedirectResponse
    {
        //
        //$this->authorize('update', $material);

        $validated = $request->validate([
            //'message' => 'required|string|max:255',
            'nombre' => 'required|string|max:255',
            'unidad_medida' => 'required|string|max:255',
            'descripcion' => 'nullable|required|string|max:255',
            'precio' => 'required',
            'sw_estado' => 'required',
        ]);

        //$material->update($request->id);

        $material = Material::find($id);
        $material->nombre = $request->nombre;
        $material->unidad_medida = $request->unidad_medida;
        $material->descripcion = $request->descripcion;
        $material->precio = $request->precio;
        $material->sw_estado = $request->sw_estado;
        //dd($request->all());
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
