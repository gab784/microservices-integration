#!/bin/bash

docker-compose exec laravel php artisan event:clear
docker-compose exec laravel php artisan event:cache
docker-compose exec laravel php artisan cache:clear
docker-compose exec laravel php artisan config:cache
docker-compose exec laravel php artisan queue:work

