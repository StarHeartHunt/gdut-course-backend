export interface Course {
  name: string; // 课程名
  day: number; // 该课程的是星期几（7代表星期天）参数范围：1 - 7
  room: string; // 教室
  teacher: string; // 老师
  startNode: number; // 开始为第几节课
  endNode: number; // 结束时为第几节课
  weeks: Array<number>; // 课程周次，如[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  credit: number; // 学分
  note: string; // 备注
  startTime: string; // 不规则的开始时间，长度必须为5，如"08:08"
  endTime: string; // 不规则的结束时间，长度必须为5，如"08:08"
}

export interface CourseRaw {
  kcmc: string;
  kcbh: string;
  jxbmc: string;
  kcrwdm: string;
  jcdm2: string;
  zcs: string;
  xq: string;
  jxcdmcs: string;
  teaxms: string;
}
