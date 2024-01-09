<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Literature extends Model
{
    use HasFactory;

    protected $fillable = [
        'author_id',
        'title',
        'evaluation',
        'description',
    ];
    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function user(): BelongsTo
    {
       return $this->belongsTo(User::class, 'author_id');
    }

}
