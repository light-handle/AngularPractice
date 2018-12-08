import { Injectable } from '@angular/core';

@Injectable()
export class TeachersService {
  getTeachers() {
    const teachers = ['abc', 'cde', 'def', 'fgh'];
    return teachers;
  }
}
