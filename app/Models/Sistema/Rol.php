<?php

namespace App\Models\Sistema;

use App\Classes\Models\Model;
class Rol extends Model
{
    const CLIENTE = 1;

    protected $table = 'roles';

    /** Campos que pueden ser usados en create/update. */
    protected $fillable = [
        'nombre',
        'descripcion',
        'sw_estado'
    ];
}
