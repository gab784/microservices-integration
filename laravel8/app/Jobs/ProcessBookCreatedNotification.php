<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Models\BookEloquent;
use Illuminate\Support\Facades\Http;

class ProcessBookCreatedNotification implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $book;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($book)
    {
        $this->book = $book;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        
      
        $responseLogin = Http::withOptions(['debug' => true])
                    ->post('http://nestjs:3000/auth/login', [
            'email' => 'cabralgabriel783@gmail.com',
            'password' => 'test1234',
        ]);

        if (!$responseLogin->successful()) {
            throw new \Exception('La solicitud al servidor falló.');
        }

        $body = $responseLogin->body();


        $parsedBody = json_decode($body, true);


        $token = $parsedBody['access_token'];

        logger('Token obtenido: ' . $token);


        $response = Http::withOptions(['debug' => true])
                    ->withToken($token) 
                    ->patch('http://nestjs:3000/authors/1/quantity', [
                            'quantity' => 1,
                        ]);
        
        if (!$response->successful()) {
            throw new \Exception('La solicitud al servidor falló.');
        }
                
        $body = $response->body();
        
        $updateBody = json_decode($body, true);

        echo "la cantidad de libros es ".$updateBody['quantity'];
  
    }
}
