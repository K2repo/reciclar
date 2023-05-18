<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Zona extends Model
{
    const ACTIVO   = 1;
    const INACTIVO = 0;

    protected $table = 'zonas';
    public $timestamps = false;

    /** Campos que pueden ser usados en create/update. */
    protected $fillable = [
        'nombre',
        'descripcion',
        'sw_estado'
    ];

    public function ruta()
    {
        return $this->hasOne(Ruta::class, 'cod_zona', 'id');
    }

    public function rutaActivo()
    {
        $this->ruta()->where('sw_estado', self::ACTIVO);
    }

    public function rutas()
    {
        return $this->hasOne(Ruta::class, 'cod_zona', 'id');
    }

    public function rutasActivo()
    {
        $this->rutas()->where('sw_estado', self::ACTIVO);
    }
}