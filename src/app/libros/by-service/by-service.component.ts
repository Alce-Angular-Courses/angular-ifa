import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/model/libro';
import { LibrosService } from 'src/app/services/libros.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ifa-by-service',
  templateUrl: './by-service.component.html',
  styleUrls: ['./by-service.component.scss']
})
export class ByServiceComponent implements OnInit {

  clave: string
  libros: Array<Libro>
  constructor(private ls: LibrosService) { }

  ngOnInit(): void {
      this.libros = []
      
  }

  onClickBuscar() {
    if(!this.clave) {
      return
    }
    this.ls.get(this.clave).then(
      resp => this.libros = resp
    )
  }

}
