<?php

namespace App\Http\Requests;

use App\Models\Vehiculo\Vehiculo;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class VehiculoRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        $reglas = [
            'placa'  => ['required', 'string', 'max:255'],
            'modelo' => ['required', 'string', 'max:255'],
            'marca'  => ['required', 'string', 'max:255'],
            'cilindraje'  => ['required', 'numeric'],
            'soat'  => ['required', 'string'],
            'tecno_mecanica'  => ['required', 'string'],
            'linea' => ['required', 'string', 'max:255'],
            'descripcion'  => ['required', 'string', 'max:255'],
            'cod_ruta'  => ['required', 'string'],
            'cod_usuario' => ['required', 'string', 'max:255'],
        ];

        if (!$this->has('id')) {
            array_push($reglas['placa'], Rule::unique(Vehiculo::class));
        }

        return $reglas;
    }
}
