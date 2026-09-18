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
<<<<<<< HEAD
<<<<<<< HEAD
         * @return \Illuminate\Database\Eloquent\Relations\HasMany<\App\Models\User, \App\Models\Cinema>
    */
=======
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<\App\Models\User, \App\Models\Cinema>
     */
>>>>>>> 63c8c8d (create cinema seeders and factories)
=======
         * @return \Illuminate\Database\Eloquent\Relations\HasMany<\App\Models\User, \App\Models\Cinema>
    */
>>>>>>> 4000ba8 (rebase done)
    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }

    /**
<<<<<<< HEAD
         * @return \Illuminate\Database\Eloquent\Relations\HasMany<\App\Models\Showroom, \App\Models\Cinema>
=======
         * @return \Illuminate\Database\Eloquent\Relations\HasMany<\App\Models\Showtime, \App\Models\Cinema>
>>>>>>> 4000ba8 (rebase done)
    */
    public function rooms(): HasMany
    {
<<<<<<< HEAD
        return $this->hasMany(Showroom::class, 'cinema_id', 'cinema_id');
=======
       return $this->hasMany(Showtime::class);
>>>>>>> 4000ba8 (rebase done)
    }
}
