import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CreateUserDto } from './../user/dtos/create-user.dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
        ) {}

  async validateUser(email: string, password: string): Promise<any>  {

    if (email === 'email' && password === 'password') {
      const user = this.userService.findByEmail(email);
      return user;
    }
    return null;
  }

  async register(createUserDto: CreateUserDto) {
    const user = await this.userService.create(createUserDto);
    const payload = { username: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.id };

    return {
      id: user.id,
      access_token: this.jwtService.sign(payload),
      
    };
  }

}
