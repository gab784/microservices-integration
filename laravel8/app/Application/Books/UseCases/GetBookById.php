<?php
namespace App\Application\Books\UseCases;

use App\Domain\Books\Repositories\BookRepositoryInterface;

class GetBookById
{
    protected $bookRepository;

    public function __construct(BookRepositoryInterface $bookRepository)
    {
        $this->bookRepository = $bookRepository;
    }

    public function execute($id)
    {
        return $this->bookRepository->find($id);
    }
}
