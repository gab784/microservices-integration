<?php
namespace App\Application\Books\UseCases;

use App\Domain\Books\Repositories\BookRepositoryInterface;
use App\Events\BookCreated;

class CreateBook
{
    protected $bookRepository;

    public function __construct(BookRepositoryInterface $bookRepository)
    {
        $this->bookRepository = $bookRepository;
    }

    public function execute(array $data)
    {
        $book =  $this->bookRepository->create($data);

        event(new BookCreated($book));

        return $book;
    }
}
