import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-about-module',
  templateUrl: './about-module.component.html',
  styleUrls: ['./about-module.component.scss'],
})
export class AboutModuleComponent implements OnInit  {
  message: string = '';

  constructor(private communicationService: CommunicationService) {
    console.log('lazy loading');
  }

  ngOnInit(): void {
    this.communicationService.currentMessage.subscribe(message => this.message = message);
  }

  sendMessage(): void {
    this.communicationService.changeMessage('Hello from About component!');
  }
}
