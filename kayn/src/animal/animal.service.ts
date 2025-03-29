import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './animal.entity';

import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal)
    private animalRepository: Repository<Animal>,
  ) {}

  findAll(): Promise<Animal[]> {
    return this.animalRepository.find();
  }

  create(data: Partial<Animal>): Promise<Animal> {
    return this.animalRepository.save(data);
  }
}

@Controller()
export class AnimalMessageController {
  @EventPattern('user_created')
  handleUserCreated(data: any) {
    console.log('User créé reçu depuis gilgamesh :', data);
  }
}
