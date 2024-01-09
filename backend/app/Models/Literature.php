<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Literature extends Model
{
    use HasFactory;
    protected function setKeysForSaveQuery($query)
    {
        $query
        ->where('authorId', '=', $this->getAttribute('user_id'));
        return $query;
    }
    protected $fillable = [
        'authorId',
        'title',
        'evaluation',
        'description',
    ];
    protected $hidden = [
        'created_at',
        'updated_at',
    ];
    
}
