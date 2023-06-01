<?php

namespace App\Models;

use App\Classes\Models\Model;
class Departamento extends Model
{
    protected $table = 'departamentos';

    /** Campos que pueden ser usados en create/update. */
    protected $fillable = [
        'nombre',
        'sw_estado'
    ];

    public function ciudad()
    {
        return $this->hasOne(Ciudad::class, 'cod_departamento', 'id');
    }

    public function ciudades()
    {
        return $this->hasOne(Ciudad::class, 'cod_departamento', 'id');
    }
}