import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebcamCaptureComponent } from './tasks/webcam-capture/webcam-capture.component';
import { DrawRectComponent } from './tasks/draw-rect/draw-rect.component';
import { FormWithValidationsComponent } from './tasks/form-with-validations/form-with-validations.component';
import { WebcamComponent } from './tasks/webcam-capture/pages/webcam/webcam.component';
import { WebcamImageComponent } from './tasks/webcam-capture/pages/webcam-image/webcam-image.component';
import { FormErrorComponent } from './shared/components/form-error/form-error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmComponent } from './shared/modals/confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    WebcamCaptureComponent,
    DrawRectComponent,
    FormWithValidationsComponent,
    WebcamComponent,
    WebcamImageComponent,
    FormErrorComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
