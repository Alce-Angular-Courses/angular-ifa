import { Component, Input, OnInit } from '@angular/core';
import { MenuItems } from 'src/app/app.component';

@Component({
  selector: 'ifa-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() menuItems: Array<MenuItems>
  constructor() { }

  ngOnInit(): void {

  }

}
