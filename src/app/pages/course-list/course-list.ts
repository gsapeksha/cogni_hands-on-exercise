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
  { name: 'Angular', status: 'passed' },
  { name: 'Java', status: 'failed' },
  { name: 'SQL', status: 'pending' },
  { name: 'TypeScript', status: 'passed' }
];

  selectedCourse = 'Angular';

  onEnroll(course: string) {
    alert('Enrolled in ' + course);
  }

}