import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ifa-tareas',
  template: `
    <ifa-lista-simple class="col-6"></ifa-lista-simple>
  `,
  styles: [
  ]
})
export class TareasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
