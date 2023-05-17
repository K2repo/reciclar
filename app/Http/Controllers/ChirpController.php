<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use Illuminate\Http\Response;
use Inertia\Inertia;
use Inertia\Response;
//saving chirp
use Illuminate\Http\RedirectResponse;

class ChirpController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    //public function index()
    /*public function index(): Response
    {
        return response('Hello, World!');
    }*/

    public function index(): Response
    {
        return Inertia::render('Chirps/Index', [
            //
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
    /*public function store(Request $request)
    {

    }*/

    public function store(Request $request): RedirectResponse
    {
        //
        dd($request->all());
        /*$validated = $request->validate([
            'message' => 'required|string|max:255',
        ]);*/

        //$request->user()->chirps()->create($validated);

        return redirect(route('chirps.index'));
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
