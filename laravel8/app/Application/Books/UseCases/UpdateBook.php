<?php
namespace App\Application\Books\UseCases;

use App\Domain\Books\Repositories\BookRepositoryInterface;

class UpdateBook
{
    protected $bookRepository;

    public function __construct(BookRepositoryInterface $bookRepository)
    {
        $this->bookRepository = $bookRepository;
    }

    public function execute($id, array $data)
    {
        return $this->bookRepository->update($id, $data);
    }
}
