import { Component, OnDestroy, OnInit } from '@angular/core';

interface Task {
  done: boolean,
  title: string
}

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit, OnDestroy {
  

  title = 'Mis Tareas 2';

  

  tasks: Array<Task> = [];

  inputTask = 'Nueva tarea';

  constructor() {
  }


  ngOnInit(): void {
    this.tasks.push({ title: 'Comprar gomitas', done: false});
    this.tasks.push({ title: 'Conseguir dinero para las gomitas', done: true});

  }

  ngOnDestroy() {
    this.title = this.inputTask

  }

  addTask() {
    this.tasks.push({ title: this.inputTask, done: false});
  }

  deleteTask(task: Task) {
    this.tasks.pop()
    console.log(`Eliiminando ${task}`)
  }
}