import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder,SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Arlest2')
  .setDescription('Booking API Arlest2')
  .setVersion('1.0')
  .addTag('HotelBooking')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);//http://localhost:3000/api/
  await app.listen(3000);
}
bootstrap();
