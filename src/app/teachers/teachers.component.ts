import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../services/teachers/teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent {
  private teachers: any;
  public email = 'something@some.com';

  constructor(teachersService: TeachersService) {
    this.teachers = teachersService.getTeachers();
  }

  onKeyUp() {
    console.log(this.email);
  }

}
