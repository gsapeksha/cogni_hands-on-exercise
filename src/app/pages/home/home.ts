import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  studentName = 'Apeksha';

  studentInput = '';

  showMessage = true;

  course = 'Angular';

  isDisabled = false;

  count = 0;

  increaseCount() {
    this.count++;
  }
}