import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ifa-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit {
  mensaje: string;
  nombre: string
  constructor() {
  }

  ngOnInit(): void {
    this.mensaje = 'Escribe aquí tu nombre'
    this.nombre = 'Ernesto'
  }

  onClickBorrar(ev: Event) {
    this.nombre = ''
    console.log(ev)
  }

}
