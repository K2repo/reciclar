<?php

use App\Http\Controllers\ChirpController;
use App\Http\Controllers\Cliente\ClienteController;
use App\Http\Controllers\LandingPageReciclar\LandingPageReciclarController;
use App\Http\Controllers\Material\MaterialController;
use App\Http\Controllers\Material\MaterialRecolectadoController;
use App\Http\Controllers\Meritos\MeritosController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Ruta\RutaController;
use App\Http\Controllers\Vehiculo\VehiculoController;
use App\Models\Ruta;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
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
    return Inertia::render('Perfiles/PerfilAdmin');
})->middleware(['auth', 'verified'])->name('perfilAdmin');

Route::get('/PerfilUsuario', function () {
    return Inertia::render('Perfiles/PerfilUsuario',
    [
        'materiales_reciclados' => DB::table('detalle_material_recolectado')
                                        ->selectRaw("detalle_material_recolectado.cod_material, materiales.nombre, materiales.descripcion, materiales.photo, SUM(cantidad_recolectada) as cantidad_recolectada")
                                        ->where('cod_usuario', Auth::user()->id)
                                        ->join('materiales','detalle_material_recolectado.cod_material','=','materiales.id')
                                        ->groupByRaw("detalle_material_recolectado.cod_material, materiales.nombre,materiales.descripcion, materiales.photo")
                                        ->get(),
        'meritos' => DB::table('meritos_puntos')->where('cod_usuario', Auth::user()->id)->get(),
        'rutas_programadas' => []
    ]);
})->middleware(['auth', 'verified'])->name('PerfilUsuario');


Route::get('/tenderoPuntoEco', function () {
    return Inertia::render('Perfiles/TenderoPuntoEco',
    [
        'materiales' => DB::table('materiales')->get(),
        'rutas' => Ruta::
        selectRaw("rutas.id, rutas.nombre, fecha_programacion, zonas.nombre as zona,ciudades.nombre AS ciudad, users.name as recolector")
        ->join('zonas', 'rutas.cod_zona','=','zonas.id')
        ->join('ciudades', 'zonas.cod_ciudad','=','ciudades.id')
        ->join('users', 'rutas.cod_recolector_1','=','users.id')
        ->get()
    ]
);
})->middleware(['auth', 'verified'])->name('tenderoPuntoEco');




Route::middleware('auth')->group(function () {
    //Route::resource('perfiles', MaterialController::class);
    Route::get('clientes/{id}/buscar-ciudades', [ClienteController::class, 'buscarCiudades'])
        ->name('clientes.buscarCiudades');
    Route::resource('clientes', ClienteController::class)
        ->only(['index', 'create', 'store', 'edit', 'update', 'destroy', 'buscarCiudades']);
    Route::resource('rutas', RutaController::class);
    Route::get('vehiculos/{id}/buscar-rutas', [VehiculoController::class, 'buscarRutas'])
        ->name('vehiculos.buscarRutas');
    Route::resource('vehiculos', VehiculoController::class)
        ->only(['index', 'create', 'store', 'edit', 'update', 'destroy', 'buscarRutas']);
    Route::resource('materiales', MaterialController::class);
    Route::resource('meritos', MeritosController::class);
    Route::resource('recoleccion_materiales', MaterialRecolectadoController::class);
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
