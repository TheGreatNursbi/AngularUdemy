import { SummaryPipe } from './pipes/summary.pipe';
import { AuthorsService } from './authors.service';
import { CoursesServcie } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { MatIconModule } from '@angular/material/icon';
import { TitleCasePipe } from '../app/pipes/title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [
    CoursesServcie,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
