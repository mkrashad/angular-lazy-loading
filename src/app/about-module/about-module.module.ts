import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutModuleRoutingModule } from './about-module-routing.module';
import { AboutModuleComponent } from './about-module.component';


@NgModule({
  declarations: [
    AboutModuleComponent
  ],
  imports: [
    CommonModule,
    AboutModuleRoutingModule
  ]
})
export class AboutModuleModule { }
