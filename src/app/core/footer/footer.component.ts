import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ifa-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  autor: string;
  fecha: Date;
  constructor() { }

  ngOnInit(): void {
    this.autor = 'Alejandro Cerezo'
    this.fecha = new Date
  }

}
