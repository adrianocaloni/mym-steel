import { Component, OnInit } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mym-home',
  templateUrl: './mym-home.component.html',
  styleUrls: ['./mym-home.component.css']
})
export class MymHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public beforeChange($event: NgbPanelChangeEvent) {

    if ($event.panelId === 'preventchange-2') {
      $event.preventDefault();
    }

    if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
      $event.preventDefault();
    }
  }

}
