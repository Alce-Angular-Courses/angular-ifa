import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/model/tarea';

@Component({
  selector: 'ifa-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent implements OnInit {
  @Input() tarea: Tarea
  @Input('indice') index: number
  @Output() deleteTarea: EventEmitter<number>
  @Output() changeTarea: EventEmitter<number>
  constructor() { 
    this.deleteTarea = new EventEmitter()
    this.changeTarea = new EventEmitter()
  }

  ngOnInit(): void {
    this.tarea = {...this.tarea}
  }

  onChangeSendCompleted() {
    this.changeTarea.next(this.index)
  }

  onClickSendDelete() {
    this.deleteTarea.next(this.index)
  }
}
