<?php

namespace App\Http\Requests\V1;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateMovieRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->tokenCan('movies:create');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {

        $method = $this->method();
        if ($method === 'PUT') {
            return [
                'title' => ['required'],
                'description' => ['required'],
                'release_date' => ['required'],
                'language' => ['required'],
                'imd_rating' => ['required'],
                'poster_path' => ['required'],
                'active' => ['required']
            ];
        } else {
            return [
                'title' => ['sometimes', 'required'],
                'description' => ['sometimes', 'required'],
                'release_date' => ['sometimes', 'required'],
                'language' => ['sometimes', 'required'],
                'imd_rating' => ['sometimes', 'required'],
                'poster_path' => ['sometimes', 'required'],
                'active' => ['sometimes', 'required']
            ];
        }
    }
}
