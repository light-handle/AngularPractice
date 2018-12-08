import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { StudentsComponent } from './students.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors.component';
import { AuthorsService } from './authors.service';
import { TasksComponent } from './tasks/tasks.component';
import { TasksService } from './tasks.service';
import { StarComponent } from './star/star.component';
import { TitelizeComponent } from './titelize/titelize.component';
import { TitelizePipe } from './titelize.pipe';
import { TeachersComponent } from './teachers/teachers.component';
import { TeachersService } from './services/teachers/teachers.service';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    StudentsComponent,
    CourseComponent,
    AuthorsComponent,
    TasksComponent,
    StarComponent,
    TitelizeComponent,
    TitelizePipe,
    TeachersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AuthorsService,
    TasksService,
    TeachersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
