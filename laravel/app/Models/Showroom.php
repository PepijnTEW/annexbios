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

    //Sets primary key
    protected $primaryKey = 'showtime_id';
    public $incrementing = true;

    protected $fillable = [
        'showroom_name',
        'cinema_id',
    ];

    /**
         * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<\App\Models\Cinema, \App\Models\Showroom>
    */
    public function cinema(): BelongsTo
    {
        return $this->belongsTo(Cinema::class, 'cinema_id', 'cinema_id');
    }

    /**
         * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<\App\Models\Showtime, \App\Models\Showroom>
    */
    public function showtime(): HasMany
    {
       return $this->hasMany(Showtime::class);
    }
}
