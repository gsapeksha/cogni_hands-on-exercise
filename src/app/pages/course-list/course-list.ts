import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {
  

  courses = [
    'Angular',
    'Java',
    'SQL',
    'TypeScript'
  ];

  selectedCourse = 'Angular';

  onEnroll(course: string) {
    alert('Enrolled in ' + course);
  }

}