import { Controller, Post, Req, UseGuards, Body, Logger, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CreateUserDto } from 'src/user/dtos/create-user.dto/create-user.dto';


@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req);
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    this.logger.log('Register route called');
    return this.authService.register(createUserDto);
  }
}
