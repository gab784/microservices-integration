import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './entities/author.entity';
import { EventBus } from '@nestjs/cqrs';
import { AuthorCreatedEvent } from './events/author-created.event';
import { CreateAuthorDto } from './dto/create-author.dto';
import { User } from '../user/entities/user.entity';
import { UpdateQuantityDto } from './dto/update-author.dto';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly eventBus: EventBus,
  ) {}

  findAll(): Promise<Author[]> {
    return this.authorRepository.find({ relations: ['user'] });
  }

  findOne(id: number): Promise<Author> {
    return this.authorRepository.findOne({ where: { id }, relations: ['user'] });
  }

  async create(authorData: CreateAuthorDto ): Promise<Author> {
    
    const user = await this.userRepository.findOne({ where: { id: authorData.userId} });

    const author = new Author();
    author.name = authorData.name;
    author.bio = authorData.bio;
    
    if (!user) {
      throw new Error('No se encontró el usuario');
    }

    author.user = user;
    
    try{
        const newAuthor = await this.authorRepository.save(author);
        this.eventBus.publish(new AuthorCreatedEvent(newAuthor.id, newAuthor.name, newAuthor.user.id));
        return newAuthor;

    }catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('El usuario ya tiene un autor asignado.');
      } else {
        throw error;
      }
    }
    

  }

  async remove(id: number): Promise<void> {
    await this.authorRepository.delete(id);
  }

  async updateQuantity(id: number, updateQuantityDto: UpdateQuantityDto): Promise<Author> {
    const author = await this.authorRepository.findOne({ where: {id}  });
    if (!author) {
      throw new NotFoundException(`Author with ID ${id} not found`);
    }
    author.quantity = updateQuantityDto.quantity + 1;
    return this.authorRepository.save(author);
  }
}
