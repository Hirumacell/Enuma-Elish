import { Module } from '@nestjs/common';
import { AnimalController } from './animal.controller';
import { AnimalMessageController, AnimalService } from './animal.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animal } from './animal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Animal])],
  controllers: [AnimalController, AnimalMessageController],
  providers: [AnimalService],
})
export class AnimalModule {}
