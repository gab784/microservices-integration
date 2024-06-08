<?php

namespace App\Application\Books\UseCases;

use App\Domain\Books\Repositories\BookRepositoryInterface;
use Illuminate\Database\Eloquent\Collection;

class GetAllBooks
{
    protected $bookRepository;

    public function __construct(BookRepositoryInterface $bookRepository)
    {
        $this->bookRepository = $bookRepository;
    }

    public function execute(): Collection
    {
        return $this->bookRepository->all();
    }
}
