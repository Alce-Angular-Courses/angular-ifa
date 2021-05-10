import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Alumno, Curso, Turno } from 'src/app/model/alumno';
import { CURSOS, TURNOS } from 'src/app/model/cursos.data';

@Component({
  selector: 'ifa-tform',
  templateUrl: './tform.component.html',
  styleUrls: ['./tform.component.scss']
})
export class TformComponent implements OnInit {
  cursos: Array<Curso>
  turnos: Array<Turno>
  alumno: Alumno

  @ViewChild('formRef', {static:true} ) form: ElementRef
  @ViewChild('ngFormRef', {static:true} ) ngform: NgForm
  constructor() { }

  ngOnInit(): void {
    this.cursos = CURSOS
    this.turnos = TURNOS
    // this.alumno = new Alumno()
    console.log(this.form)
    console.log(this.ngform)
  }

  onSubmit() {
    this.alumno = this.ngform.value
    console.log('Enviando', this.alumno )
  }

}
