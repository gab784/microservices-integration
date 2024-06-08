import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  dotenv.config(); 
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'my-secret', // Cambia esto por una cadena secreta más segura
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 3600000, // Configura la duración de la cookie a tu preferencia
      },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.enableCors({
    origin: '*', // o una URL específica
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });

  await app.listen(3000);
}
bootstrap();
