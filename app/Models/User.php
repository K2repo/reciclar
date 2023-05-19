<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Models\Sistema\Rol;
use App\Models\Sistema\UsuarioRol;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    const ACTIVO   = 1;
    const INACTIVO = 0;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'last_name',
        'tipo_documento',
        'numero_documento',
        'email',
        'password',
        'telefono',
        'direccion_residencia',
        'direccion_residencia_2',
        'sw_estado',
        'cod_ciudad',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function roles()
    {
        return $this->hasMany(UsuarioRol::class, 'cod_usuario', 'id');
    }

    public function rol()
    {
        return $this->hasOne(UsuarioRol::class, 'cod_usuario', 'id');
    }

    public function esCliente()
    {
        return $this->rol()->where('cod_rol', Rol::CLIENTE);
    }

    public function delete(): bool
    {
        return $this->update(['sw_estado' => self::INACTIVO]);
    }
}
