<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ruta extends Model
{
    const ACTIVO   = 1;
    const INACTIVO = 0;

    protected $table = 'rutas';
    public $timestamps = false;

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