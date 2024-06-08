<?php
namespace App\Application\Books\UseCases;

use App\Domain\Books\Repositories\BookRepositoryInterface;

class DeleteBook
{
    protected $bookRepository;

    public function __construct(BookRepositoryInterface $bookRepository)
    {
        $this->bookRepository = $bookRepository;
    }

    public function execute($id): bool
    {
        return $this->bookRepository->delete($id);
    }
}
