import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  message: string = '';

  constructor(private communicationService: CommunicationService) {
    console.log('lazy loading');
  }

  ngOnInit(): void {
    this.communicationService.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }

  sendMessage(): void {
    this.communicationService.changeMessage('Hello from About component!');
  }
}
