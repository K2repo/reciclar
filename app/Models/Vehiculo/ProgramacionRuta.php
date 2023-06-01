<?php

namespace App\Models\Vehiculo;

use App\Models\Ruta;
use App\Classes\Models\Model;

class ProgramacionRuta extends Model
{
    protected $table = 'programacion_rutas';

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
