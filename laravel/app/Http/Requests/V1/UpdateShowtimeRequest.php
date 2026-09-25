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
                'movie_id' => ['required'],
                'cinema_id' => ['required'],
                'start_time' => ['required'],
                'end_time' => ['required'],
                'showroom_id' => ['required'],
            ];
        } else {
            return [
                'movie_id' => ['sometimes', 'required'],
                'cinema_id' => ['required', 'sometimes'],
                'start_time' => ['sometimes', 'required'],
                'end_time' => ['sometimes', 'required'],
                'showroom_id' => ['sometimes', 'required'],
            ];
        }
    }
}
