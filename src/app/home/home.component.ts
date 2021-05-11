import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ifa-home',
  template: `
    <div class="row">
      <ifa-saludo class="col-6"></ifa-saludo> 
      <ifa-saludo-ref class="col-6"></ifa-saludo-ref>      
    </div>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
