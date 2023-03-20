import { Body, Headers, Controller, Get } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Course } from './interfaces/course.interface';

@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Get()
  async findAll(
    @Headers('X-Cookie') cookies: string,
    @Body('semester') semester: string,
  ): Promise<Array<Course>> {
    return this.coursesService.findAll(cookies, semester);
  }

  @Get('termStartWeek')
  async getTermStartWeek(
    @Headers('X-Cookie') cookies: string,
    @Body('semester') semester: string,
  ): Promise<Array<Record<string, string>>> {
    return this.coursesService.getTermStartWeek(cookies, semester);
  }

  @Get('weekSchedule')
  async getTermWeekSchedule(
    @Headers('X-Cookie') cookies: string,
    @Body('semester') semester: string,
    @Body('week') week: number,
  ): Promise<any> {
    return this.coursesService.getTermWeekSchedule(cookies, semester, week);
  }
}
