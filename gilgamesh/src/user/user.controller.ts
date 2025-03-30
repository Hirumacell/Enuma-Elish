import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserWithAnimalDTO } from 'src/dto/userwithanimalDTO';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() user: Partial<User>): Promise<User> {
    this.userService.notifyAnimalService(user);
    return this.userService.create(user);
  }

  @Post('with-animal')
  createWithAnimal(
    @Body() user: Partial<UserWithAnimalDTO>,
  ): Promise<UserWithAnimalDTO> {
    console.log('JSON', user);
    return this.userService.createWithAnimal(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@Req() req) {
    return req.user;
  }
}
