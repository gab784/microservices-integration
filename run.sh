#!/bin/bash
docker-compose exec laravel php artisan migrate
docker-compose exec laravel php artisan queue:table
docker-compose exec laravel php artisan queue:work
