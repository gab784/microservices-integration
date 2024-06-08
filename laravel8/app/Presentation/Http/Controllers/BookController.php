<?php
namespace App\Presentation\Http\Controllers;


use Illuminate\Http\Request;
use App\Application\Books\UseCases\GetAllBooks;
use App\Application\Books\UseCases\GetBookById;
use App\Application\Books\UseCases\CreateBook;
use App\Application\Books\UseCases\UpdateBook;
use App\Application\Books\UseCases\DeleteBook;


class BookController extends Controller
{
    protected $getAllBooks;
    protected $getBookById;
    protected $createBook;
    protected $updateBook;
    protected $deleteBook;

    public function __construct(
        GetAllBooks $getAllBooks,
        GetBookById $getBookById,
        CreateBook $createBook,
        UpdateBook $updateBook,
        DeleteBook $deleteBook
    ) {
        $this->getAllBooks = $getAllBooks;
        $this->getBookById = $getBookById;
        $this->createBook = $createBook;
        $this->updateBook = $updateBook;
        $this->deleteBook = $deleteBook;
    }

    public function index()
    {
        $books = $this->getAllBooks->execute();
        return response()->json($books);
    }

    public function show($id)
    {
        $book = $this->getBookById->execute($id);
        if ($book) {
            return response()->json($book);
        }
        return response()->json(['error' => 'Book not found'], 404);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'author_id' => 'required|integer',
            'published_date' => 'required|date',
        ]);
        
        $book = $this->createBook->execute($data);
        return response()->json($book, 201);
    }

    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'author' => 'sometimes|required|string|max:255',
            'published_date' => 'sometimes|required|date',
        ]);

        $book = $this->updateBook->execute($id, $data);
        if ($book) {
            return response()->json($book);
        }
        return response()->json(['error' => 'Book not found'], 404);
    }

    public function destroy($id)
    {
        $success = $this->deleteBook->execute($id);
        if ($success) {
            return response()->json(['message' => 'Book deleted'], 200);
        }
        return response()->json(['error' => 'Book not found'], 404);
    }
}
