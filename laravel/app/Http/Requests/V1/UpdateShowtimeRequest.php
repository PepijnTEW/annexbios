<?php

namespace App\Http\Requests\V1;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateShowtimeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true; //CHANGE TO AUTH
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
                'movie_id' => ['required', 'int', 'exists:movies,movie_id'],
                'cinema_id' => ['required', 'int', 'exists:cinemas,cinema_id'],
                'start_time' => ['required', 'datetime'],
                'end_time' => ['required', 'datetime'],
                'showroom_id' => ['required', 'exists:showrooms,showroom_id'],
            ];
        } else {
            return [
                'movie_id' => ['sometimes', 'required', 'int', 'exists:movies,movie_id'],
                'cinema_id' => ['required', 'sometimes', 'int', 'exists:cinemas,cinema_id'],
                'start_time' => ['sometimes', 'required', 'datetime'],
                'end_time' => ['sometimes', 'required', 'datetime'],
                'showroom_id' => ['sometimes', 'required', 'exists:showrooms,showroom_id'],
            ];
        }
    }
}
