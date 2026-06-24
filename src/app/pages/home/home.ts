import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  studentName = 'Apeksha';

  course = 'Angular';

  isDisabled = false;

  count = 0;

  increaseCount() {
    this.count++;
  }

}