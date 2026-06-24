import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  studentName = 'Apeksha';

  showMessage = true;

  course = 'Angular';

  isDisabled = false;

  count = 0;

  increaseCount() {
    this.count++;
  }
}