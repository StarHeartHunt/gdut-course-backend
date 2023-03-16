import { Injectable } from '@nestjs/common';
import { Course } from './interfaces/course.interface';

@Injectable()
export class CoursesService {
  private readonly courses: Course[] = [];

  create(course: Course) {
    this.courses.push(course);
  }

  findAll(): Course[] {
    return this.courses;
  }
}
