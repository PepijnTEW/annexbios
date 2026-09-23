<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MovieResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'movieId' => $this->movie_id,
            'title' => $this->title,
            'description' => $this->description,
            'releaseDate' => $this->release_date,
            'language' => $this->language,
            'imdRating' => $this->imd_rating,
            'posterPath' => $this->poster_path,
            'active' => $this->active,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
            'actors' => ActorResource::collection($this->actors)
        ];
    }
}
