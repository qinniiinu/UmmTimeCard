import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject, filter, tap } from 'rxjs';
import { Breadcrumb } from './components/navigation/navigation.component';

@Injectable({
  providedIn: 'root',
})
export class RouterChangeHandlerService {
  routerChangeRouterList = new BehaviorSubject<Breadcrumb | Breadcrumb[]>([]);

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        tap((res) => console.log(res))
      )
      .subscribe((event) => {
        const breadcrumb = event.url
          .split('/')
          .filter((item) => item)
          .map((item) => ({
            name: item,
            breadType: 'route',
            filterCondition: item,
          }));
        this.routerChangeRouterList.next(breadcrumb);
      });
  }

  setRouterChangeRouterList(data: Breadcrumb) {
    this.routerChangeRouterList.next(data);
  }
}
