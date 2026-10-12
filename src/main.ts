import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common/pipes/index.js';
import { TransformResponseInterceptor } from './interceptors/transform-response/transform-response.interceptor.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  //Mengaktifkan Validasi global
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
  }));

  app.useGlobalInterceptors(new TransformResponseInterceptor());

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
