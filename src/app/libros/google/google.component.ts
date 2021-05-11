import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/model/libro';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ifa-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})
export class GoogleComponent implements OnInit {
  urlBase: string
  clave: string
  libros: Array<Libro>
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      this.libros = []
      this.urlBase = environment.urlLibros
  }

  onClickBuscar() {
    if(!this.clave) {
      return
    }
    this.http.get(this.urlBase+this.clave).toPromise()
      .then( (resp: any ) =>
        this.libros = resp.items.map(
          item => {
            const libro: Libro = {
              id: item.id,
              titulo: item.volumeInfo.title,
              autor: item.volumeInfo.authors,
              fecha: item.volumeInfo.publishedDate
            }
            return libro
          }
        ))
  }

}
