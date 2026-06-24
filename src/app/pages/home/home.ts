import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../services/student';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  studentDetails: any;
  constructor(private studentService: StudentService) {

  this.studentDetails =
    this.studentService.getStudentDetails();

}

  studentName = 'Apeksha';

  showMessage = true;

  studentForm = {
  name: '',
  course: '',
  semester: ''
};

submitted = false;
submitForm() {
  this.submitted = true;

  if (
    this.studentForm.name &&
    this.studentForm.course &&
    this.studentForm.semester
  ) {
    alert('Form Submitted Successfully!');
  }
}

  course = 'Angular';

  courses = [
    'Angular',
    'Java',
    'SQL',
    'TypeScript'
  ];

  isDisabled = false;

  count = 0;

  studentInput = '';

  increaseCount() {
    this.count++;
  }
}