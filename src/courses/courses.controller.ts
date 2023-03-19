import { Body, Controller, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Course } from './interfaces/course.interface';

@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Post()
  async findAll(
    @Body('cookies') cookies: string,
    @Body('semester') semester: string,
  ): Promise<Array<Course>> {
    return this.coursesService.findAll(cookies, semester);
  }

  @Post('termStartWeek')
  async getTermStartWeek(
    @Body('cookies') cookies: string,
    @Body('semester') semester: string,
  ): Promise<Array<Record<string, string>>> {
    return this.coursesService.getTermStartWeek(cookies, semester);
  }

  @Post('weekSchedule')
  async getTermWeekSchedule(
    @Body('cookies') cookies: string,
    @Body('semester') semester: string,
    @Body('week') week: number,
  ): Promise<any> {
    return this.coursesService.getTermWeekSchedule(cookies, semester, week);
  }
}
