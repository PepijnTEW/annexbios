<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Cinema extends Model
{
    use HasFactory;

    protected $table = 'cinemas';

    protected $primaryKey = 'cinema_id';
    public $incrementing = true;

    protected $fillable = [
        'cinema_name',
    ];

    /**
         * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<\App\Models\User, \App\Models\Cinema>
    */
    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }

    /**
         * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<\App\Models\Cinema, \App\Models\Showtimes>
    */
    public function showtimes(): HasMany
    {
       return $this->hasMany(Showtimes::class);
    }
}
