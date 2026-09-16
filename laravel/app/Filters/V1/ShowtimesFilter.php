<?php

namespace App\Filters\V1;

use App\Filters\ApiFilter;

class ShowtimesFilter extends ApiFilter
{

    protected $safeParms = [
        'showtimeId' => ['eq'],
        'cinemaId' => ['eq'],
        'movieId' => ['eq'],
        'date' => ['eq', 'lt', 'gt', 'lte', 'gte'],
        'time' => ['eq', 'lt', 'gt', 'lte', 'gte']
    ];

    protected $columnMap = [
        'showtimeId' => 'showtime_id',
        'cinemaId' => 'cinema_id',
        'movieId' => 'movie_id'
    ];

    protected $operatorMap = [
        'eq' => '=',
        'lt' => '<',
        'lte' => '<=',
        'gt' => '>',
        'gte' => '>='
    ];
}
