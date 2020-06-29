import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  imgUrl = 'assets/images/logo.svg';
  brand = 'Sample HTML Project';

  constructor() { }

  ngOnInit(): void {
  }

}
