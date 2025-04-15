import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import * as jwksRsa from 'jwks-rsa';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      //audience: 'gilgamesh-client',
      issuer: 'http://localhost:8080/realms/gojo-realm',
      algorithms: ['RS256'],
      secretOrKeyProvider: jwksRsa.passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 10,
        jwksUri:
          'http://localhost:8080/realms/gojo-realm/protocol/openid-connect/certs',
      }),
    });
  }

  async validate(payload: any) {
    try {
      return payload;
    } catch (e) {
      console.error('❌ Erreur dans validate() :', e);
      throw e;
    }
  }
}
