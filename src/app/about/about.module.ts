import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutModuleRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [AboutComponent, FirstComponent, SecondComponent],
  imports: [CommonModule, AboutModuleRoutingModule],
})
export class AboutModule {}
