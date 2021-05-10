import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/model/tarea';

@Component({
  selector: 'ifa-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  tareas: Array<Tarea>
  store: string;
  constructor() { }

  ngOnInit(): void {
    this.store = 'Tareas'
    this.tareas = localStorage.getItem(this.store) ?
        JSON.parse(localStorage.getItem(this.store)) : []
  }

  onAddTarea(tarea: Tarea) {
    this.tareas.push(tarea)
    this.save()
  }

  onDeleteTarea(i: number) {
    this.tareas.splice(i, 1)
    this.save()
  }

  onChangeTarea(i: number) {
    this.tareas[i].isCompleted = !this.tareas[i].isCompleted
    this.save()
  }

  private save() {
    console.log(this.tareas)
    localStorage.setItem(this.store, JSON.stringify(this.tareas))
  }
}
