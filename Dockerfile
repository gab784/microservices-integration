# Usar la imagen oficial de PHP con FPM
FROM php:7.4-fpm

# Instalar dependencias requeridas por Laravel y Composer
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    git \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_pgsql mbstring exif pcntl bcmath xml \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Instalar Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copiar el archivo de configuración de PHP
COPY laravel/php.ini /usr/local/etc/php/

# Establecer el directorio de trabajo
WORKDIR /var/www/html

# Instalar las dependencias de Composer
COPY laravel/composer.json /var/www/html/
RUN composer install --no-scripts --no-autoloader

# Copiar el código de la aplicación
COPY ./laravel /var/www/html

# Ejecutar el comando de optimización de Composer
RUN composer dump-autoload

# Cambiar los permisos de los directorios de almacenamiento
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
