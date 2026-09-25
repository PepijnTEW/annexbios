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
            'cinemaId' => $this->showroom?->cinema_id,
            'showroomId' => $this->showroom_id,
            'movieId' => $this->movie_id,
            'startTime' => $this->start_time,
            'endTime' => $this->end_time,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
            'movie' => new MovieResource($this->movie)
        ];
    }
}
