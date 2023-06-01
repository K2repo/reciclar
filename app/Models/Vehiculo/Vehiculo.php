<?php

namespace App\Models\Vehiculo;

use App\Classes\Models\Model;

class Vehiculo extends Model
{
    protected $table = 'vehiculos';

    /** Campos que pueden ser usados en create/update. */
    protected $fillable = [
        'placa',
        'marca',
        'modelo',
        'sw_estado'
    ];

    public function detalle()
    {
        return $this->hasOne(DetalleVehiculo::class, 'cod_vehiculo', 'id');
    }

    public function programacion()
    {
        return $this->hasOne(ProgramacionRuta::class, 'cod_vehiculo', 'id');
    }
}
