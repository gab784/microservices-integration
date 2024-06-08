import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SessionSerializer } from './session.serializer';


@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: "elpeterete",
        signOptions: { expiresIn: '60m' },
      }),
      inject: [ConfigService],
    }),
    UserModule,
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, SessionSerializer],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
