
## Desafío de Integración de Microservicios

Este es un desafío diseñado para poner a prueba tus habilidades en la integración de microservicios utilizando tecnologías como Laravel 8 y NestJS. El objetivo es interactuar entre dos microservicios: uno construido en Laravel para el registro de libros y otro en NestJS para el manejo de autores y la actualización de la cantidad de libros que poseen.

### Descripción del Desafío

El desafío consiste en crear dos microservicios:

1. **Microservicio en Laravel 8**: Este microservicio se encargará de manejar el registro de libros. Se utilizará un job para actualizar la cantidad de libros que posee un autor. Este microservicio se conectará a una base de datos PostgreSQL.

2. **Microservicio en NestJS**: Este microservicio gestionará la información de los autores y actualizará la cantidad de libros que poseen.

### Tecnologías Utilizadas

- Laravel 8
- NestJS
- PostgreSQL
- Docker
- Docker Compose

### Instrucciones

1. Clona este repositorio en tu máquina local.

2. Asegúrate de tener Docker y Docker Compose instalados en tu sistema.

3. Ejecuta el siguiente comando para construir los contenedores Docker:

    ```
    docker-compose build
    ```

4. Una vez que los contenedores estén construidos correctamente, ejecuta el siguiente comando para levantar los servicios:

    ```
    docker-compose up
    ```

5. Finalmente, ejecuta el script `run.sh` para iniciar los microservicios y realizar las pruebas necesarias:

    ```
    sh run.sh
    ```

### Requisitos

- PHP >= 7.4
- Node.js >= 22
- PostgreSQL

