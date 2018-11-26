import { Component, OnInit } from '@angular/core';
import { pageTransition } from '../animation';

@Component({
  selector: 'app-second-ex',
  templateUrl: './second-ex.component.html',
  styleUrls: ['./second-ex.component.scss'],
  animations: [ pageTransition ]
})
export class SecondExComponent implements OnInit {
  state = 'in';
  constructor() { }

  ngOnInit() {
    this.state = (this.state === 'in' ? 'out' : 'in');
  }

}
