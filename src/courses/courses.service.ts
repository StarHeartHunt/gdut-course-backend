import { Injectable } from '@nestjs/common';
import { AxiosInstance } from 'axios';
import { createAxios } from 'src/utils/request';
import { JSDOM } from 'jsdom';
import { Course, CourseRaw } from './interfaces/course.interface';

@Injectable()
export class CoursesService {
  axiosRef: AxiosInstance;

  constructor() {
    this.axiosRef = createAxios();
  }

  async findAll(cookies, semester): Promise<Array<Course>> {
    const htmlDoc = (
      await this.axiosRef.get('/xsgrkbcx!xsAllKbList.action', {
        params: {
          xnxqdm: semester,
        },
        headers: {
          Cookie: cookies,
        },
      })
    ).data;
    const dom = new JSDOM(htmlDoc);
    const script = dom.window.document
      .querySelector('body')
      .querySelector('script').lastChild.textContent;
    const courseRaws: Array<CourseRaw> = JSON.parse(
      script.split(';')[1].trim().split('=')[1].trim(),
    );
    const courses: Array<Course> = courseRaws.map((courseRaw) => {
      const dayNodes = courseRaw.jcdm2
        .split(',')
        .map((node) => {
          return Number(node);
        })
        .sort();
      const weekNodes = courseRaw.zcs
        .split(',')
        .map((node) => {
          return Number(node);
        })
        .sort();
      return {
        name: courseRaw.kcmc,
        day: Number(courseRaw.xq),
        room: courseRaw.jxcdmcs,
        teacher: courseRaw.teaxms,
        startNode: dayNodes[0],
        endNode: dayNodes[dayNodes.length - 1],
        startWeek: weekNodes[0],
        endWeek: weekNodes[weekNodes.length - 1],
        type: 0,
        credit: 0,
        note: courseRaw.jxbmc,
        startTime: '',
        endTime: '',
      };
    });
    console.log(courses);

    return courses;
  }
}
