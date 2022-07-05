import 'dotenv/config';
import { env } from 'process';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = env.SERVER_PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}

bootstrap();
