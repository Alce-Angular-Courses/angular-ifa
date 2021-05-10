import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Curso, Turno } from 'src/app/model/alumno';
import { CURSOS, TURNOS } from 'src/app/model/cursos.data';

@Component({
  selector: 'ifa-mform',
  templateUrl: './mform.component.html',
  styleUrls: ['./mform.component.scss']
})
export class MformComponent implements OnInit {

  cursos: Array<Curso>
  turnos: Array<Turno>
  formAlumno: FormGroup
  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.cursos = CURSOS
    this.turnos = TURNOS
    this.formAlumno = this.fb.group({
      nombre: [''],
      apellidos: [''],
      dni: [''],
      email:  [''],
      nacim:  [''],
      coment:  [''],
      isOk:  [false],
      turno:  [null],
      curso:  [null]
    })
  }
}
