import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { JwtStrategy } from './auth/jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'radio-demon-warehouse',
      schema: 'gilgamesh',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    PassportModule,
  ],
  providers: [JwtStrategy],
})
export class AppModule {}
