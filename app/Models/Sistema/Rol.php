<?php

namespace App\Models\Sistema;

use Illuminate\Database\Eloquent\Model;

class Rol extends Model
{
    const ACTIVO   = 1;
    const INACTIVO = 0;
    
    const CLIENTE = 1;

    protected $table = 'roles';
    public $timestamps = false;

    /** Campos que pueden ser usados en create/update. */
    protected $fillable = [
        'nombre',
        'descripcion',
        'sw_estado'
    ];
}
