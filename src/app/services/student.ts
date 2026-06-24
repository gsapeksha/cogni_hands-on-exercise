import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentName = 'Apeksha';

  course = 'Java';

  semester = 6;

  getStudentDetails() {
    return {
      name: this.studentName,
      course: this.course,
      semester: this.semester
    };
  }
}