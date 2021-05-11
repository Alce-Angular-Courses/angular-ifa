import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ifa-libros',
  template: `
    <div class="row">
      <ifa-mock class="col-6"></ifa-mock>
      <ifa-google class="col-6"></ifa-google>
      <ifa-by-service class="col-6"></ifa-by-service>       
    </div>
  `,
  styles: [
  ]
})
export class LibrosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
