<?php

namespace App\Models\Vehiculo;

use Illuminate\Database\Eloquent\Model;

class DetalleVehiculo extends Model
{
    protected $table = 'detalle_vehiculo';
    public $timestamps = false;

    /** Campos que pueden ser usados en create/update. */
    protected $fillable = [
        'cod_vehiculo',
        'nombre',
        'descripcion',
        'linea',
        'cilindraje',
        'soat',
        'tecno_mecanica',
        'sw_estado',
    ];
}
