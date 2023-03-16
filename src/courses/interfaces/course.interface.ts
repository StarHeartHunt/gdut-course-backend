export interface Course {
  name: string; // 课程名
  day: number; // 该课程的是星期几（7代表星期天）参数范围：1 - 7
  room: string; // 教室
  teacher: string; // 老师
  startNode: number; // 开始为第几节课
  endNode: number; // 结束时为第几节课
  startWeek: number; // 开始周
  endWeek: number; // 结束周
  type: number; // 单双周，每周为0，单周为1，双周为2
  credit: number; // 学分
  note: string; // 备注
  startTime: string; // 不规则的开始时间，长度必须为5，如"08:08"
  endTime: string; // 不规则的结束时间，长度必须为5，如"08:08"
}
