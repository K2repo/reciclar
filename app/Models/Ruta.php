<?php

namespace App\Models;

use App\Classes\Models\Model;
class Ruta extends Model
{
    protected $table = 'rutas';
    //public $timestamps = true;
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

    public function recolector()
    {
        return $this->belongsTo(User::class, 'cod_recolector_1', 'id');
    }
}
