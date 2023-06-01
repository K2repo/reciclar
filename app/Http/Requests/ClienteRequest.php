<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ClienteRequest extends FormRequest
{
    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'name.required' => 'Por favor ingrese su nombre.',
            'last_name.required' => 'Por favor ingrese su apellido.',
            'tipo_documento.required' => 'Por favor seleccione el tipo de identificación.',
            'numero_documento.required' => 'Por favor ingrese su numero de identificación.',
            'cod_rol.required' => 'Por favor seleccione el rol.',
            'telefono.required' => 'Por favor ingrese su telefono.',
            'telefono.numeric' => 'El telefono no puede tener cadenas de texto.',
            'email.required' => 'Por favor ingrese un correo electronico.',
            'email.email' => 'Por favor ingrese una direccion de correo electronico valido.',
            'cod_ciudad.required' => 'Por favor seleccione la ciudad.',
            'direccion_residencia.required' => 'Por favor ingrese su dirección.',
            'direccion_residencia.max' => 'La dirección superar los 255 caracteres permitidos.',
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
            'name' => ['required', 'string', 'max:255'],
            'last_name'  => ['required', 'string', 'max:255'],
            'tipo_documento'  => ['required', 'string'],
            'numero_documento'  => ['required', 'string'],
            'cod_rol'  => ['required'],
            'telefono'  => ['required', 'numeric'],
            'email'  => ['required', 'email', 'string', 'max:255'],
            'cod_ciudad'  => ['required'],
            'direccion_residencia'  => ['required', 'string', 'max:255'],
        ];

        if (!$this->has('id')) {
            array_push($reglas['email'], Rule::unique(User::class));
            $this->merge(['password' => password_hash($this->get('numero_documento'), PASSWORD_DEFAULT)]);
        }

        return $reglas;
    }
}
