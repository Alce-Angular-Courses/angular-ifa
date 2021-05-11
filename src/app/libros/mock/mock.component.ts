import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/model/libro';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'ifa-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.scss']
})
export class MockComponent implements OnInit {
  clave: string
  libros: Array<Libro>
  constructor(private ls: LibrosService) { }

  ngOnInit(): void {
      this.libros
  }

  onClickBuscar() {
    this.libros = []
    if (!this.clave) {
      return
    }
    this.libros = this.ls.getMock(this.clave)
    this.clave = ''
  }

  /* onClickBuscarAsync() {
    if (!this.clave) {
      return
    }
    this.ls.getMockAsinc(this.clave).then(
      resp => this.libros = resp
    )
    this.clave = ''
  } */

  async onClickBuscarAsync() {
    if (!this.clave) {
      return
    }
    this.libros = await this.ls.getMockAsinc(this.clave)
    this.clave = ''
  }

  onClickBuscarRx() {
    if (!this.clave) {
      return
    }
    this.ls.getMockRx(this.clave).subscribe(
      resp => this.libros = resp
    )
    this.clave = ''

  }

}
