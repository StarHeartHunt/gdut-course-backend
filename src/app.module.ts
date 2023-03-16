import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [HttpModule, CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
