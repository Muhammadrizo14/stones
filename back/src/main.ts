import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {

  const port = 3001;


  const httpsOptions = {
key: fs.readFileSync('/root/stones/back/src/cert/key.pem'),
  cert: fs.readFileSync('/root/stones/back/src/cert/cert.pem')
};

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(port);
  console.log(`Server running on http://1627061-ci09322.twc1.net:${port}/`);
}
bootstrap();
