<?php

namespace App\Filters\V1;

use Illuminate\Http\Request;
use App\Filters\ApiFilter;

class MoviesFilter extends ApiFilter
{
    protected $safeParms = [
        'movieId' => ['eq'],
        'title' => ['eq'],
        'releaseDate' => ['eq', 'lt', 'gt', 'lte', 'gte'],
        'language' => ['eq'],
        'imdRating' => ['eq', 'lt', 'gt', 'lte', 'gte'],
        'active' => ['eq']
    ];

    protected $columnMap = [
        'movieId' => 'movie_id',
        'releaseDate' => 'release_date',
        'imdRating' => 'imd_rating'
    ];

    protected $operatorMap = [
        'eq' => '=',
        'lt' => '<',
        'lte' => '<=',
        'gt' => '>',
        'gte' => '>='
    ];
}
