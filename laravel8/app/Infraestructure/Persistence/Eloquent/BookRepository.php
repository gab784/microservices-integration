<?php
namespace App\Infraestructure\Persistence\Eloquent;

use App\Domain\Books\Entities\Book;
use App\Domain\Books\Repositories\BookRepositoryInterface;
use App\Models\BookEloquent;
use Illuminate\Database\Eloquent\Collection;

class BookRepository implements BookRepositoryInterface
{
    public function all(): Collection
    {
        return BookEloquent::all();
    }

    public function find($id): ?Book
    {
        $book = BookEloquent::find($id);
        if ($book) {
            return new Book($book->id, $book->title, $book->author, $book->published_date);
        }
        return null;
    }

    public function create(array $data): Book
    {
        $book = BookEloquent::create($data);
        return new Book($book->id, $book->title, $book->author_id, $book->published_date);
    }

    public function update($id, array $data): ?Book
    {
        $book = BookEloquent::find($id);
        if ($book) {
            $book->update($data);
            return new Book($book->id, $book->title, $book->author, $book->published_date);
        }
        return null;
    }

    public function delete($id): bool
    {
        $book = BookEloquent::find($id);
        if ($book) {
            $book->delete();
            return true;
        }
        return false;
    }
}
