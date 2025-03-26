<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GameRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => 'string|required',
            'developer' => 'string|required',
            'genre' => 'string|required',
            'release_date' => 'date|required',
            'platform' => 'string|required',
            'price' => 'numeric|required',
        ];
    }
}
