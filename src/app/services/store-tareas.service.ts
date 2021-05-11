import { Injectable } from '@angular/core';
import { Tarea } from '../model/tarea';

@Injectable({
    providedIn: 'root'
})
export class StoreTareasService {
  store: string
  constructor() {
    this.store = 'Tareas'
   }

  get(): Array<Tarea> {
    const data = localStorage.getItem(this.store) ? 
        JSON.parse( localStorage.getItem(this.store)) : []
    return data
  }

  set(tarea: Array<Tarea>): void {
    localStorage.setItem(this.store, JSON.stringify(tarea))
  }
}
