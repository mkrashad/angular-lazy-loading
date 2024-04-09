// about-module-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AboutComponent } from './about.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const staticRoutes: Routes = [{ path: '', component: AboutComponent }];

@NgModule({
  imports: [RouterModule.forChild(staticRoutes)],
  exports: [RouterModule],
})
export class AboutModuleRoutingModule {
  constructor(private router: Router) {
    this.addDynamicRoute();
  }

  addDynamicRoute() {
    const additionalRoutes: Routes = [
      { path: 'first', component: FirstComponent },
      { path: 'second', component: SecondComponent },
    ];
    this.router.resetConfig([...staticRoutes, ...additionalRoutes]);
  }
}
