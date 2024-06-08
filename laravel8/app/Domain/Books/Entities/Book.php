<?php
namespace App\Domain\Books\Entities;

class Book
{
    public $id;
    public $title;
    public $author;
    public $publishedDate;

    public function __construct($id, $title, $author, $publishedDate)
    {
        $this->id = $id;
        $this->title = $title;
        $this->author = $author;
        $this->publishedDate = $publishedDate;
    }
}
