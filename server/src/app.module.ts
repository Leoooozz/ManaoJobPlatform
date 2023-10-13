import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobOffersModule } from './job-offers/job-offers.module';

import * as dotenv from 'dotenv'; // Importez la bibliothèque dotenv
dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    JobOffersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
