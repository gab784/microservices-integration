<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Domain\Books\Repositories\BookRepositoryInterface;
use App\Infraestructure\Persistence\Eloquent\BookRepository;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        /*$this->app->bind(
            \App\Repositories\BookRepositoryInterface::class,
            \App\Repositories\BookRepository::class
        );*/
        $this->app->bind(BookRepositoryInterface::class, BookRepository::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
