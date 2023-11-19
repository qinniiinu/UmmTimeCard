import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject, filter, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouterChangeHandlerService {
  routerChangeRouterList = new BehaviorSubject<string[]>([]);

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        tap((res) => console.log(res))
      )
      .subscribe((event) => {
        this.routerChangeRouterList.next(event.url.split('/').filter((item) => item));
      });
  }
}

type T = any | null;
