import { Controller, Get, Post, Param, Body, Delete, UseGuards, Patch, Request } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { Author } from './entities/author.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateQuantityDto } from './dto/update-author.dto';


@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<Author[]> {
    return this.authorsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Author> {
    return this.authorsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createAuthorDto: CreateAuthorDto): Promise<Author> {   
    return this.authorsService.create(createAuthorDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.authorsService.remove(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/quantity')
  updateQuantity(@Param('id') id: number, @Body() updateQuantityDto: UpdateQuantityDto, @Request() req): Promise<Author> {
    return this.authorsService.updateQuantity(id, updateQuantityDto);
  }
}
