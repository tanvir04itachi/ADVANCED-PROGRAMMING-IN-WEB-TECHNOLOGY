import { 
  Controller, 
  Delete, 
  Get, 
  Param, 
  Patch, 
  Post, 
  Put
} from '@nestjs/common';

@Controller('course')
export class CourseController {
  @Get()
  getAllCourses(): string {
    return 'This returns all courses';
  }

  @Get(':id')
  getCourseById(@Param('id') id: string): string {
    return `This returns a course by ID: ${id}`;
  }

  @Post()
    createCourse(): string {
    return 'This returns a new course';
  }

  @Put(':id')
  updateCourse(@Param('id') id: string): string {
    return `This returns a updated course with ID: ${id}`;
  }

  @Patch(':id')
  patchCourse(@Param('id') id: string): string {
    return `This returns a patched course with ID: ${id}`;
  }

  @Delete(':id')
  deleteCourse(@Param('id') id: string): string {
    return `This returns a deleted course with ID: ${id}`;
  }
}