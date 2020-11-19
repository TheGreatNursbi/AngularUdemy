import { CoursesServcie } from './courses.service';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
  {{ course.title | slice : 2 | uppercase }} <br/>
  {{ course.students | number }} <br/>
  {{ course.rating | number: '10.2-2' }} <br/>
  {{ course.price | currency:'RUB':true:'3.0-0' }} <br/>
  {{ course.releaseDate | date : 'shortDate' }} <br/>
  <hr>
  {{ text | summary}}
  `
})
export class CoursesComponent {
  course = {
    title: 'The Complete Angular Course',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  };

  text = 'Все параметры в пайп передаются через двоеточие. В данном случае slice:6:11 вырезает подстроку, начиная с 6 до 11 индекса. При этом, если начала выреза строки обязательно передавать, то конечный индекс необязателен. В этом случае в качестве конечного индекса выступает конец строки.';

  constructor() {
  }
}
