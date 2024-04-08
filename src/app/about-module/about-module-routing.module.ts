import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutModuleComponent } from './about-module.component';

const routes: Routes = [{ path: '', component: AboutModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutModuleRoutingModule { }
