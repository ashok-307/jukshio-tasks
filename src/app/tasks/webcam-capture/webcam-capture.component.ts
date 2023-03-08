import { Component } from '@angular/core';
import { Menu } from 'src/app/app.component';
import { RoutingAPI } from 'src/app/constants/route.constant';

@Component({
  selector: 'app-webcam-capture',
  templateUrl: './webcam-capture.component.html',
  styleUrls: ['./webcam-capture.component.scss']
})
export class WebcamCaptureComponent {
  public subMenus: Menu[] = [
    {
      name: 'Webcam',
      url: RoutingAPI.WEB_CAM
    },
    {
      name: 'Webcam Image',
      url: RoutingAPI.WEB_CAM_IMAGE
    }
  ];
}
