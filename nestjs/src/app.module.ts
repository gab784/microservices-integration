import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { AuthorsModule } from './authors/authors.module';
import { Author } from './authors/entities/author.entity';
import { CqrsModule } from '@nestjs/cqrs';
import { User } from './user/entities';

@Module({
  imports: [
  //  CorsModule,
    UserModule,
    AuthorsModule,
    CqrsModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),  
        entities: [User, Author],
        synchronize: true,
      }),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
