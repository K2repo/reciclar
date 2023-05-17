<?php

use App\Http\Controllers\ChirpController;
use App\Http\Controllers\Cliente\ClienteController;
use App\Http\Controllers\LandingPageReciclar\LandingPageReciclarController;
use App\Http\Controllers\Material\MaterialController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Ruta\RutaController;
use App\Http\Controllers\Vehiculo\VehiculoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/perfilAdmin', function () {
    return Inertia::render('PerfilAdmin');
})->middleware(['auth', 'verified'])->name('perfilAdmin');

Route::middleware('auth')->group(function () {
    //Route::resource('perfiles', MaterialController::class);
    Route::resource('clientes', ClienteController::class);
    Route::resource('rutas', RutaController::class);
    Route::resource('vehiculos', VehiculoController::class);
    Route::resource('materiales', MaterialController::class);
});

Route::resource('chirps', ChirpController::class)
->only(['index', 'store'])
->middleware(['auth', 'verified']);

Route::resource('landingPageReciclar', LandingPageReciclarController::class);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';


/*Route::get('/rutas', function () {
    return Inertia::render('Rutas/Index');
})->middleware(['auth', 'verified'])->name('rutas');*/
/*Route::get('/material', function () {
    return Inertia::render('Material/Index');
})->middleware(['auth', 'verified'])->name('material');*/
//->middleware(['auth', 'verified']);
