import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ifa-saludo-ref',
  templateUrl: './saludo-ref.component.html',
  styleUrls: ['./saludo-ref.component.scss']
})
export class SaludoRefComponent implements OnInit {

  @ViewChild('nombreRef', {static: true}) nombre: ElementRef
  constructor() { 
    console.log(this.nombre)
  }

  ngOnInit(): void {
    console.log(this.nombre)
    this.nombre.nativeElement.value = 'Elena'
  }
}
