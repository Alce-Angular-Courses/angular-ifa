import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Libro } from '../model/libro';
import { LIBROS } from '../model/libros.data';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  urlBase: string
  constructor(private http: HttpClient) {
    this.urlBase = environment.urlLibros
   }

  getMock(clave: string): Array<Libro> {
    if(!clave) {
      return
    }
    return LIBROS
  }

  getMockAsinc(clave: string): Promise<Array<Libro>> {
    if(!clave) {
      return
    }
    return new Promise( resolve => {
      setTimeout( ()=> {
        resolve(LIBROS)
      }, 1000)
    })
  }

  getMockRx(clave: string): Observable<Array<Libro>> {
    if(!clave) {
      return
    }
    return new Observable( subscribe => {
      setTimeout(()=>{
        subscribe.next(LIBROS)
      }, 1000)
    })
  }

  get(clave: string): Promise<Array<Libro>> {
    if(!clave) {
      return
    }
    return this.http.get(this.urlBase+clave).toPromise()
    .then( (resp: any ) => {
      console.log(resp)
      return resp.items.map(
        item => {
          const libro: Libro = {
            id: item.id,
            titulo: item.volumeInfo.title,
            autor: item.volumeInfo.authors,
            fecha: item.volumeInfo.publishedDate
          }
          return libro
        }
    )})
  } // Fin get
}
