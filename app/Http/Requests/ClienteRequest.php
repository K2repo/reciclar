<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ClienteRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        $reglas = [
            'email'  => ['required', 'string', 'max:255'],
            'name' => ['required', 'string', 'max:255'],
            'last_name'  => ['required', 'string', 'max:255'],
            'tipo_documento'  => ['required', 'string'],
            'numero_documento'  => ['required', 'string'],
        ];

        if (!$this->has('id')) {
            array_push($reglas['email'], Rule::unique(User::class));
            $this->merge(['password' => password_hash($this->get('numero_documento'), PASSWORD_DEFAULT)]);
        }

        return $reglas;
    }
}
