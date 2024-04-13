import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'sample-app-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: `
     <sample-app-analog-welcome/>
  `,
})
export default class HomeComponent {
}
