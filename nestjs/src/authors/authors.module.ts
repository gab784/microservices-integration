import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { Author } from './entities/author.entity';
import { CqrsModule } from '@nestjs/cqrs';
import { AuthorCreatedHandler } from './events/handlers/author-created.handler';
import { User } from 'src/user/entities';

const EventHandlers = [AuthorCreatedHandler];

@Module({
  imports: [TypeOrmModule.forFeature([Author, User]), CqrsModule],
  providers: [AuthorsService,...EventHandlers],
  controllers: [AuthorsController],
})
export class AuthorsModule {}
