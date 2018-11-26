import { Component, Input } from '@angular/core';
import { mainPage } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [mainPage]

})

export class AppComponent {
  state = 'inactive';

  ourItems = [
    'Start the new app project',
    'Work on blog',
    'Lunch at 1'
  ];

  toggleFocus() {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }

  submitItem(event) {
    this.ourItems.push(event.target.value);
    event.target.value = '';
  }

  removeItem(event, i) {
    this.ourItems.splice(i, 1);
  }
}
