import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {

  const port = 3001;


  const httpsOptions = {
    key: fs.readFileSync('/var/www/httpd-cert/newcert/new.key'),
    cert: fs.readFileSync('/var/www/httpd-cert/newcert/new.crt')
  };

  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  })


  app.enableCors();
  await app.listen(port);
  console.log(`Server running on https://vkamne.com:${port}/`);
}
bootstrap();
