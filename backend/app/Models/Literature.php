<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Literature extends Model
{
    use HasFactory;
    protected $fillable = [
        'author',
        'title',
        'evaluation',
        'description',
    ];
    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
