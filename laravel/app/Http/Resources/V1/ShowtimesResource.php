<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ShowtimesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'showtimeId' => $this->showtime_id,
            'cinemaId' => $this->cinema_id,
            'movieId' => $this->movie_id,
            'date' => $this->date,
            'time' => $this->time,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at
        ];
    }
}
