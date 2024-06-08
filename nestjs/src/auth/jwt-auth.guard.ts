import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    if (err || !user) {
      // Si hay un error o el usuario no está presente, puedes manejarlo aquí
      throw err || new UnauthorizedException();
    }
    // Añade el usuario al objeto de solicitud
    return user;
  }
}
