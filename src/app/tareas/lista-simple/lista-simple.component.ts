import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/model/tarea';
import { StoreTareasService } from 'src/app/services/store-tareas.service';

@Component({
  selector: 'ifa-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.scss']
})
export class ListaSimpleComponent implements OnInit {
  tarea: Tarea;
  tareas: Array<Tarea>
  // store: string;
  
  constructor(private st: StoreTareasService) { }

  ngOnInit(): void {
    // this.store = 'Tareas'
    this.tarea = new Tarea()
    /* this.tareas = localStorage.getItem(this.store) ?
        JSON.parse(localStorage.getItem(this.store)) : [] */
    this.tareas = this.st.get()
  }

  onClickAdd() {
    this.tareas.push(this.tarea)
    this.tarea = new Tarea()
    this.save()
  }
  
  onChangeCompleted() {
    this.save()
  }

  onClickDelete(i: number) {
    this.tareas.splice(i,1)
    this.save()
  }

  private save() {
    console.log(this.tareas)
    // localStorage.setItem(this.store, JSON.stringify(this.tareas))
    this.st.set(this.tareas)
  }
}
