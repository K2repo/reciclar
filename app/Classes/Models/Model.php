<?php

namespace App\Classes\Models;

use Illuminate\Database\Eloquent\Model as ModelOriginal;
abstract class Model extends ModelOriginal
{
    const ACTIVO   = 1;
    const INACTIVO = 0;

    public $timestamps = false;

    public function delete(): bool
    {
        return $this->update(['sw_estado' => self::INACTIVO]);
    }
}

