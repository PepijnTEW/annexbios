<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Showroom extends Model
{
    use HasFactory;

    protected $table = 'showrooms';

<<<<<<< HEAD:laravel/app/Models/Showroom.php
    protected $primaryKey = 'showroom_id';
=======
    //Sets primary key
    protected $primaryKey = 'showtime_id';
>>>>>>> 7c957bc19ea670f0a893e1839bb788cf9a751b9c:laravel/app/Models/Showtimes.php
    public $incrementing = true;

    protected $fillable = [
        'showroom_name',
        'cinema_id',
    ];

    /**
<<<<<<< HEAD:laravel/app/Models/Showroom.php
         * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<\App\Models\Cinema, \App\Models\Showroom>
    */
=======
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<\App\Models\Cinema, \App\Models\Showtime>
     */
>>>>>>> 7c957bc19ea670f0a893e1839bb788cf9a751b9c:laravel/app/Models/Showtimes.php
    public function cinema(): BelongsTo
    {
        return $this->belongsTo(Cinema::class, 'cinema_id', 'cinema_id');
    }

    /**
<<<<<<< HEAD:laravel/app/Models/Showroom.php
         * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<\App\Models\Showtime, \App\Models\Showroom>
    */
    public function showtime(): HasMany
=======
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<\App\Models\Movie, \App\Models\Showtime>
     */
    public function movie(): BelongsTo
>>>>>>> 7c957bc19ea670f0a893e1839bb788cf9a751b9c:laravel/app/Models/Showtimes.php
    {
       return $this->hasMany(Showtime::class);
    }
}
