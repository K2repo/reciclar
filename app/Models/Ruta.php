<?php

namespace App\Models;

use App\Classes\Models\Model;
class Ruta extends Model
{
    protected $table = 'rutas';

    /** Campos que pueden ser usados en create/update. */
    protected $fillable = [
        'placa',
        'marca',
        'modelo',
        'sw_estado'
    ];

    public function zona()
    {
        return $this->belongsTo(Zona::class, 'cod_zona', 'id');
    }
}