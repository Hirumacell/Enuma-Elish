import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalModule } from './animal/animal.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'radio-demon-warehouse',
      schema: 'kayn',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AnimalModule,
  ],
})
export class AppModule {}
