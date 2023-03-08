import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RoutingAPI } from './constants/route.constant';

export interface Menu {
  name: string;
  url: string;
  icon?: string;
}
export const Menus: Menu[] = [
  {
    name: 'Webcam',
    url: RoutingAPI.WEB_CAM
  },
  {
    name: 'Draw Rect',
    url: RoutingAPI.DRAW_RECT
  },
  {
    name: 'Forms',
    url: RoutingAPI.FORMS
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public menus: Menu[] = Menus;

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
    this.router.events.subscribe((res: any) => {
      if (res instanceof NavigationEnd) {
        window.scrollTo({top: 0});
      }
    });
  }

}
