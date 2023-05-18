<?php

namespace App\Models\Vehiculo;

use Illuminate\Database\Eloquent\Model;

class Vehiculo extends Model
{
    const ACTIVO   = 1;
    const INACTIVO = 0;

    protected $table = 'vehiculos';
    public $timestamps = false;

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
