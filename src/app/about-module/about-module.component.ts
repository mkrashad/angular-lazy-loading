import { Component } from '@angular/core';

@Component({
  selector: 'app-about-module',
  templateUrl: './about-module.component.html',
  styleUrls: ['./about-module.component.scss'],
})
export class AboutModuleComponent {
  constructor() {
    console.log('lazy loading');
  }
}
