import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ifa-tareas',
  template: `
    <ifa-lista-simple class="col-6 lista"></ifa-lista-simple>
    <ifa-lista class="col-6 lista" ></ifa-lista>
  `,
  styles: [
    `.lista {
        display: block;
        margin-top: 1rem;
        border: 1px solid;
        padding: 1rem
    }`
  ]
})
export class TareasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
