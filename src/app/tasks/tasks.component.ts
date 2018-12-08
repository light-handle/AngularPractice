import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks;
  email = 'h@g.com';

  constructor(tasksService: TasksService) { 
    this.tasks = tasksService.getTasks();
  }

  onKeyUp() {
    alert(this.email);
  }
  onSave($event) {
    console.log('Saved', $event);
    alert('Saved');
  }

}
