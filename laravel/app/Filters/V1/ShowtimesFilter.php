<?php

namespace App\Filters\V1;

use App\Filters\ApiFilter;

class ShowtimesFilter extends ApiFilter
{

    protected $safeParms = [
        'showtimeId' => ['eq'],
        'showroomId' => ['eq'],
        'movieId' => ['eq'],
        'startTime' => ['eq', 'lt', 'gt', 'lte', 'gte'],
        'endTime' => ['eq', 'lt', 'gt', 'lte', 'gte']
    ];

    protected $columnMap = [
        'showtimeId' => 'showtime_id',
        'showroomId' => 'showroom_id',
        'movieId' => 'movie_id',
        'startTime' => 'start_time',
        'endTime' => 'end_time',
    ];

    protected $operatorMap = [
        'eq' => '=',
        'lt' => '<',
        'lte' => '<=',
        'gt' => '>',
        'gte' => '>='
    ];
}
