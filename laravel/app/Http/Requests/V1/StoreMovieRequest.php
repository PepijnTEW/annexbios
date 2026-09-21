<?php

namespace App\Http\Requests\V1;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Override;

class StoreMovieRequest extends FormRequest
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
        return [
            'title' => ['required', 'string'],
            'description' => ['required', 'string'],
            'release_date' => ['required', 'date'],
            'language' => ['required', 'string'],
            'imd_rating' => ['required', 'numeric'],
            'poster_path' => ['required', 'string'],
            'active' => ['required', 'bool']
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'release_date' => $this->input('releaseDate'),
            'imd_rating' => $this->input('imdRating'),
            'poster_path' => $this->input('posterPath'),
        ]);
    }
}
