import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import { RoutingService } from '../../../../app-routing.module';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  isFirst: boolean;
  isLast: boolean;
  currentRoute: String

  constructor(  private _router: Router,
                private _routingService: RoutingService) {}

  ngOnInit() {
    // Will see if we want that later
    // this.currentRoute = this._router.url;
    this._router.events.pipe(
      filter(event => event instanceof RouterEvent),
      tap(() => {
        this.isFirst = this._routingService.isFirst();
        this.isLast = this._routingService.isLast();
      }),
    ).subscribe()
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.onPrevious();
    }
    else if (event.key === 'ArrowRight') {
      this.onNext();
    }
    else if (event.key === 'H' && event.shiftKey) {
      this._router.navigateByUrl('/home');
    }
  }

  onPrevious() {
    this._routingService.previous();
  }

  onNext() {
    this._routingService.next();
  }
}
