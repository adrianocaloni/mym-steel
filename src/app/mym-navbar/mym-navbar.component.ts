import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mym-navbar',
  templateUrl: './mym-navbar.component.html',
  styleUrls: ['./mym-navbar.component.css']
})
export class MymNavbarComponent implements OnInit {
  isShown:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  

}
