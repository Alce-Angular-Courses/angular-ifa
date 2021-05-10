import { Component } from '@angular/core';

export interface MenuItems {
  name: string;
  path: string;
}

@Component({
  selector: 'ifa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuItems: Array<MenuItems>
  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      {name: 'Inicio', path: 'home'},
      {name: 'Tareas', path: 'tareas'},
      {name: 'Cursos', path: 'cursos'},
      {name: 'About', path: 'about'},
    ]
  }
}
