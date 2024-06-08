<?php

namespace App\Listeners;

use App\Events\BookCreated;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Jobs\ProcessBookCreatedNotification;
class SendBookCreatedNotification implements ShouldQueue
{

    /**
     * Handle the event.
     *
     * @param  \App\Events\BookCreated  $event
     * @return void
     */
    public function handle(BookCreated $event)
    {
        ProcessBookCreatedNotification::dispatch($event);
    }
}
