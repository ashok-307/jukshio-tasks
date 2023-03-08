import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawRectComponent } from './tasks/draw-rect/draw-rect.component';
import { FormWithValidationsComponent } from './tasks/form-with-validations/form-with-validations.component';
import { WebcamImageComponent } from './tasks/webcam-capture/pages/webcam-image/webcam-image.component';
import { WebcamComponent } from './tasks/webcam-capture/pages/webcam/webcam.component';
import { WebcamCaptureComponent } from './tasks/webcam-capture/webcam-capture.component';

const routes: Routes = [
  {
    path: '',
    component: WebcamCaptureComponent,
    children: [
      {
        path: '',
        component: WebcamComponent
      },
      {
        path: 'webcam-image',
        component: WebcamImageComponent
      },
    ]
  },
  {
    path: 'draw-rect',
    component: DrawRectComponent
  },
  {
    path: 'forms',
    component: FormWithValidationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
