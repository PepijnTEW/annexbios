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
        return $this->user()->tokenCan('showtimes:create');
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
    public function prepareForValidation()
    {
        $data = [];

        if ($this->has('movieId')) {
            $data['movie_id'] = $this->input('movieId');
        }

        if ($this->has('cinemaId')) {
            $data['cinema_id'] = $this->input('cinemaId');
        }

        if ($this->has('startTime')) {
            $data['start_time'] = $this->input('startTime');
        }

        if ($this->has('endTime')) {
            $data['end_time'] = $this->input('endTime');
        }

        if ($this->has('showroomId')) {
            $data['showroom_id'] = $this->input('showroomId');
        }

        $this->merge($data);
    }
}
