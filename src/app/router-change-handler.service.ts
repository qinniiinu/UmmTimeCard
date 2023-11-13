import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouterChangeHandlerService {
  routerChangeRouterList = new BehaviorSubject<string[]>([]);

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.routerChangeRouterList.next(event.url.split('/'));
      });
  }
}

type T = any | null;
