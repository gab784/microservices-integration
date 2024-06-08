import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'elpeterete', // Asegúrate de que este secreto coincida con el que usaste en el JwtModule
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
