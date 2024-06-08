<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookEloquent extends Model
{
    use HasFactory;

    protected $table = 'books';
    //protected $fillable = ['title', 'published_date'];
    protected $fillable = ['title', 'author_id', 'published_date'];
}
