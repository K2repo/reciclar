<?php

namespace App\Models\Vehiculo;

use App\Models\Ruta;
use Illuminate\Database\Eloquent\Model;

class ProgramacionRuta extends Model
{
    const ACTIVO   = 1;
    const INACTIVO = 0;

    protected $table = 'programacion_rutas';
    public $timestamps = false;

    /** Campos que pueden ser usados en create/update. */
    protected $fillable = [
        'cod_usuario',
        'cod_ruta',
        'cod_vehiculo',
        'sw_estado'
    ];

    public function ruta()
    {
        return $this->belongsTo(Ruta::class, 'cod_ruta', 'id');
    }
}
