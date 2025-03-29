import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserWithAnimalDTO } from 'src/dto/userwithanimalDTO';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @Inject('KAYN_SERVICE')
    private client: ClientProxy,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  create(user: Partial<User>): Promise<User> {
    return this.userRepository.save(user);
  }

  notifyAnimalService(userData: any) {
    return this.client.emit('user_created', userData);
  }

  createWithAnimal(
    user: Partial<UserWithAnimalDTO>,
  ): Promise<UserWithAnimalDTO> {
    const animal = {
      nom: user.animal.nom,
      age: user.animal.age,
      espece: user.animal.espece,
    };

    const userData = {
      nom: user.nom,
      email: user.email,
    };
    this.client.emit('animal_created', animal);
    this.userRepository.save(userData);
    const result = new UserWithAnimalDTO();
    result.nom = user.nom;
    result.email = user.email;
    result.animal = animal;
    return Promise.resolve(result);
  }
}
