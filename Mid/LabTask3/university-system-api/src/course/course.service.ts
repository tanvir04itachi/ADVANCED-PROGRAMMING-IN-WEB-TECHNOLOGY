import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService 
{
    private courses = [
        { id: "1", name: 'Course 1', code: 'CSE101' },
        { id: "2", name: 'Course 2', code: 'CSE102' },
        { id: "3", name: 'Course 3', code: 'CSE103' }
    ];
    private idCounter: number = 1;
    getAllCourses() : {
        return {
            message: 'All courses fatcched successfully',
            data: this.courses
        };
    }
    getCourseById(id: string) : string {
        const course = this.courses.find((c) => c.id === id);
        return{
            message: `Course with id ${id} fetched successfully`,
            data: course
        };
    }
    createCourse(name: string, code: string) : string {
        const newCourse = { 
            id: (this.idCounter++).toString(),
            name,
            code };
        this.courses.push(newCourse);
        return {
            message: 'Course created successfully',
            data: newCourse
        };
    }
    
}