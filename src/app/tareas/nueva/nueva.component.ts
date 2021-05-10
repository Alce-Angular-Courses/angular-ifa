import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Tarea } from 'src/app/model/tarea';

@Component({
  selector: 'ifa-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.scss']
})
export class NuevaComponent implements OnInit {
  tarea: Tarea
  @Output() addTarea: EventEmitter<Tarea>
  constructor() { 
    this.addTarea = new EventEmitter()
  }

  ngOnInit(): void {
    this.tarea = new Tarea()
  }

  onClickSendAdd() {
    if(!this.tarea.nombre) {
      return
    }
    this.addTarea.next(this.tarea)
    this.tarea = new Tarea()
  }
}
