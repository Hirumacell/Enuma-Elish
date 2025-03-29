import { Controller } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { Animal } from './animal.entity';
import { Get, Post, Body } from '@nestjs/common';

@Controller('animals')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Get()
  getAll(): Promise<Animal[]> {
    return this.animalService.findAll();
  }

  @Post()
  create(@Body() data: Partial<Animal>): Promise<Animal> {
    return this.animalService.create(data);
  }
}
