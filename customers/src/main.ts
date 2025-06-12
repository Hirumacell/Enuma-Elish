import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import {config} from "dotenv";

config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // @ts-ignore
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ_URL], // rabbitmq ou localhost
      queue: 'customers_queue',
      queueOptions: { durable: false },
    },
  });

  await app.startAllMicroservices();
  await app.listen(process.env.PORT_CUSTOMERS ?? 3000);
}
bootstrap();
