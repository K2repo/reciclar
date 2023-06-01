<?php

namespace App\Models\Sistema;

use App\Classes\Models\Model;
class UsuarioRol extends Model
{
    protected $table = 'usuarios_roles';

    /** Campos que pueden ser usados en create/update. */
    protected $fillable = [
        'cod_rol',
        'cod_usuario',
        'sw_estado'
    ];
}
