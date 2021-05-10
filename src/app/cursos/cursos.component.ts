import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ifa-cursos',
  template: `
    <div class="row">
      <ifa-tform class="col-6"></ifa-tform>
      <ifa-mform class="col-6"></ifa-mform>      
    </div>

  `,
  styles: [
  ]
})
export class CursosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
