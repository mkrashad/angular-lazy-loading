import { Component } from '@angular/core';
import { CommunicationService } from './communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-lazy-loading';
  message: string = '';

  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    this.communicationService.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }
}
