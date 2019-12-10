import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PageOneComponent } from './modules/page-one/page-one.component';
import { SummaryComponent } from './modules/summary/summary.component';
import { PageTwoComponent } from './modules/page-two/page-two.component';
import { PageThreeComponent } from './modules/page-three/page-three.component';
import { PageFourComponent } from './modules/page-four/page-four.component';
import { PageFiveComponent } from './modules/page-five/page-five.component';
import { PageSixComponent } from './modules/page-six/page-six.component';
import { ConclusionComponent } from './modules/conclusion/conclusion.component';

const steps: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'summary',
    component: SummaryComponent
  },

  {
    path: 'page-1',
    component: PageOneComponent
  },

  {
    path: 'page-2',
    component: PageTwoComponent
  },

  {
    path: 'page-3',
    component: PageThreeComponent
  },

  {
    path: 'page-4',
    component: PageFourComponent
  },

  {
    path: 'page-5',
    component: PageFiveComponent
  },

  {
    path: 'page-6',
    component: PageSixComponent
  },

  {
    path: 'conclusion',
    component: ConclusionComponent
  },

];

const routes: Routes = [

  ...steps,

  {
    path: '**',
    redirectTo: '/home'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(  private _router: Router) {}

  isFirst(): boolean {
    return this._currentRouteIndex() === 0;
  }

  isLast(): boolean {
    return this._currentRouteIndex() === steps.length - 1;
  }

  previous(): void {
    if (!this.isFirst()){

      const nextRouteIdx = this._currentRouteIndex() - 1;
      const nextRoutePath = steps[nextRouteIdx].path;
      this._router.navigateByUrl(nextRoutePath);
    }
  }

  next(): void {
    if (!this.isLast()) {

      const nextRouteIdx = this._currentRouteIndex() + 1;
      const nextRoutePath = steps[nextRouteIdx].path;
      this._router.navigateByUrl(nextRoutePath);
    }
  }

  private _currentRouteIndex(): number {
    const currentPath = this._router.url;
    const currentRouteIdx = steps.findIndex(route => route.path.startsWith(currentPath.substr(1)));
    return currentRouteIdx;
  }
}
