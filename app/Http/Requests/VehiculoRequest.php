<?php

namespace App\Http\Requests;

use App\Models\Vehiculo\Vehiculo;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class VehiculoRequest extends FormRequest
{
    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'placa.required' => 'Por favor ingrese la placa del vehiculo.',
            'modelo.required' => 'Por favor ingrese el modelo del vehiculo.',
            'marca.required' => 'Por favor ingrese la marca del vehiculo.',
            'cilindraje.required' => 'Por favor ingrese el cilindraje del vehiculo.',
            'soat.required' => 'Por favor ingrese el soat del vehiculo.',
            'tecno_mecanica.required' => 'Por favor ingrese la tecno mecanica del vehiculo.',
            'linea.required' => 'Por favor ingrese la linea del vehiculo.',
            'descripcion.required' => 'Por favor ingrese la descripción del vehiculo.',
            'cod_ruta.required' => 'Por favor seleccione una ruta.',
            'cod_usuario.required' => 'Por favor seleccione el conductor.',
        ];
    }

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
            'cod_ruta'  => ['required'],
            'cod_usuario' => ['required'],
        ];

        if (!$this->has('id')) {
            array_push($reglas['placa'], Rule::unique(Vehiculo::class));
        }

        return $reglas;
    }
}
