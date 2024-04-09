import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [{ path: '', component: AboutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutModuleRoutingModule {
  constructor() {
    this.addDynamicRoute();
  }

  addDynamicRoute() {
    const value = true;
    if (value) {
      routes.push(
        { path: 'first', component: FirstComponent },
        { path: 'second', component: SecondComponent }
      );
    }
  }
}
