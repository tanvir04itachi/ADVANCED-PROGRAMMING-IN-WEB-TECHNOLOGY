import { Injectable } from '@nestjs/common';
import { CourseService } from "../course/course.service";

@Injectable()
export class EnrollmentService 
{
  constructor(private readonly courseService: CourseService) {}
  
  private enrollments: any[] = [];
  
  enrollStudent(studentName: string, courseId: string) 
  {
    const course = this.courseService.getCourseById(courseId);
    const enrollment = { 
      id: (this.enrollments.length + 1).toString(),
      student: studentName,
      course: course,
    };
    this.enrollments.push(enrollment);

    return {
      message: "Student enrolled successfully",
      student: studentName,
      course: course,
    };
  }
  
  getAllEnrollments()
  {
    return {
      message: "All enrollments fetched successfully", 
      data: this.enrollments
    };
  }
}