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
        'auth_key',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<\App\Models\User, \App\Models\Cinema>
     */
    public function users(): HasMany
    {
        return $this->hasMany(User::class, 'cinema_id', 'cinema_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<\App\Models\Showroom, \App\Models\Cinema>
     */
    public function rooms(): HasMany
    {
        return $this->hasMany(Showroom::class, 'cinema_id', 'cinema_id');
    }
}
