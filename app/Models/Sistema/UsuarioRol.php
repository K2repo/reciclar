<?php

namespace App\Models\Sistema;

use Illuminate\Database\Eloquent\Model;

class UsuarioRol extends Model
{
    const ACTIVO   = 1;
    const INACTIVO = 0;

    protected $table = 'usuarios_roles';
    public $timestamps = false;

    /** Campos que pueden ser usados en create/update. */
    protected $fillable = [
        'cod_rol',
        'cod_usuario',
        'sw_estado'
    ];
}
