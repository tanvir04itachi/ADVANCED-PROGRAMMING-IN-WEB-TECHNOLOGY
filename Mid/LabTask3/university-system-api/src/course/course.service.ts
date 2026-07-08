import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  private courses = [
    { id: '101', name: 'Introduction to Programming', code: 'CS101' },
    { id: '102', name: 'Data Structures', code: 'CS201' },
    { id: '103', name: 'NestJS Fundamentals', code: 'CS301' },
  ];

  getAllCourses() {
    return {
      message: 'All courses fetched',
      data: this.courses,
    };
  }

  getCourseById(id: string) {
    const course = this.courses.find(c => c.id === id);
    return {
      message: 'Course fetched',
      data: course,
    };
  }

  createCourse(name: string, code: string) {
    
    const newCourse = {
      id: String(this.courses.length + 1),
      name: name,
      code: code,
    };
    this.courses.push(newCourse);
    return {
      message: 'Course created',
      data: newCourse,
    };
  }
}