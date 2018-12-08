import { Injectable } from '@angular/core';

@Injectable()
export class TasksService {

  // var tasks = ['task1', 'task2', 'task3'];

  getTasks() {
    return ['task1', 'task2', 'task3'];
  }
}
