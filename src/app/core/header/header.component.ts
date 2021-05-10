import { Component, Input, OnInit } from '@angular/core';
import { MenuItems } from 'src/app/app.component';

@Component({
  selector: 'ifa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string
  logo: string
  @Input() menuItems: Array<MenuItems>
  constructor() { 
  }

  ngOnInit(): void {
    this.title = 'Curso Angular - IFA';
    this.logo = '../../../assets/logo.svg'
  }

}
