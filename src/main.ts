import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { I18nService, I18nValidationExceptionFilter, I18nValidationPipe } from 'nestjs-i18n';
import { CustomValidationPipe } from './common/pipes/custom-validation-pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  });
  const port = process.env.PORT || 3000;

  app.useGlobalPipes(new CustomValidationPipe(app.get(I18nService)));


  await app.listen(port);
  console.log(`Application is running on: ${process.env.APP_URL}:${port}`);

}
bootstrap();
