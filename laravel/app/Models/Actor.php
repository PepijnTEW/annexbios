<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Actor extends Model
{
    use HasFactory;

    protected $table = 'actors';

    protected $primaryKey = 'actor_id';
    public $incrementing = false;

    protected $fillable = [
        'actor_id',
        'name',
    ];

    /**
         * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany<\App\Models\Movie, \App\Models\Actor>
    */
    public function movies(): BelongsToMany
    {
        return $this->belongsToMany(Movie::class, 'casts','actor_id', 'movie_id');
    }
}
