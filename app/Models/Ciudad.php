<?php

namespace App\Models;

use App\Classes\Models\Model;
class Ciudad extends Model
{
    protected $table = 'ciudades';

    /** Campos que pueden ser usados en create/update. */
    protected $fillable = [
        'nombre',
        'cod_departamento',
        'sw_estado'
    ];

    public function departamento()
    {
        return $this->belongsTo(Departamento::class, 'cod_departamento', 'id');
    }
}