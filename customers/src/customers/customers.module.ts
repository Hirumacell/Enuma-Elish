import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import {Customer} from "./entities/customer.entity";
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
  exports: [CustomersService], // Exporting the service to be used in other modules
  imports: [
    TypeOrmModule.forFeature([Customer]),
    ClientsModule.register([
        {
          name: 'CUSTOMER_SERVICE',
          transport: Transport.RMQ,
          options: {
            urls: ['amqp://localhost:5672'],
            queue: 'customer_queue',
            queueOptions: {
              durable: false,
            },
          },
        },
      ]),
  ],
})
export class CustomersModule {}
