import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AllExceptionsFilter } from './common/exceptions/http-exception.filter';
import { rateLimitMiddleware } from './middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(rateLimitMiddleware);

  const config = new DocumentBuilder()
    .setTitle('Wiki API')
    .setDescription('API documentation for internal knowledge base')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  app.use(rateLimitMiddleware);

  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(3000);
}
bootstrap().catch((err) => {
  console.error('App failed to start:', err);
  process.exit(1);
});
