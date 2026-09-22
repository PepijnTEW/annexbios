<?php

namespace App\Http\Requests\V1;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreShowtimeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        //TODO: Test other tokens to check if they can't create showtimes
        return $this->user()->tokenCan('showtimes:create');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'movie_id' => ['required', 'int'],
            'start_time' => ['required'],
            'end_time' => ['required'],
            'showroom_id' => ['required'],
            'cinema_id' => ['required']
        ];
    }

    public function prepareForValidation()
    {
        $this->merge([
            'movie_id' => $this->input('movieId'),
            'start_time' => $this->input('startTime'),
            'end_time' => $this->input('endTime'),
            'showroom_id' => $this->input('showroomId'),
            'cinema_id' => $this->input('cinemaId')
        ]);
    }
}
