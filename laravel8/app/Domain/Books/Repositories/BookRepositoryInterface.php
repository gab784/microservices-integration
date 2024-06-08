<?php
namespace App\Domain\Books\Repositories;

use App\Domain\Books\Entities\Book;

interface BookRepositoryInterface
{
    public function all();
    public function find($id);
    public function create(array $data): Book;
    public function update($id, array $data): ?Book;
    public function delete($id);
}
