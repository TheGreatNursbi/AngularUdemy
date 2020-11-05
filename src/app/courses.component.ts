import { CoursesServcie } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `<h2>{{ title }}</h2>
            <ul>
              <li *ngFor="let course of courses">
                {{ course }}
              </li>
            </ul>`
}) // method() in html called string interpolation
export class CoursesComponent {
  title = 'List of courses!';

  courses: string[];

  constructor(private _service: CoursesServcie) {
    this.courses = _service.getCourses();
  }
}
