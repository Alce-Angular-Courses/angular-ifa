import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ifa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string
  logo: string
  constructor() { 
  }

  ngOnInit(): void {
    this.title = 'Curso Angular - IFA';
    this.logo = '../../../assets/logo.svg'
  }

}
