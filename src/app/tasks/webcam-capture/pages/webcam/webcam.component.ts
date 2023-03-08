import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingAPI } from 'src/app/constants/route.constant';
import { CommonService } from 'src/app/services/common.service';
import { EmitService } from 'src/app/services/emit.service';
import { ConfirmComponent } from 'src/app/shared/modals/confirm/confirm.component';

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.scss']
})
export class WebcamComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('video') public video!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') public canvas!: ElementRef<HTMLCanvasElement>;
  private streams: any;

  private imageSource: string = '';
  constructor(
    private emitService: EmitService,
    private router: Router,
    private commonService: CommonService,
  ) {
    this.openCamera();
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.openCamera();
  }

  ngOnDestroy(): void {
    if(this.streams) {
      this.streams.getVideoTracks()[0].stop();
      this.video.nativeElement.srcObject = null;
    }
  }

  public onCapture() {
    const context = this.canvas.nativeElement.getContext('2d');
    context?.drawImage(this.video.nativeElement, 0, 0, 600, 500);
    const url = this.canvas.nativeElement.toDataURL();
    this.imageSource = url;
  }

  public onCompleted() {
    if (this.imageSource) {
      this.commonService.openModal(ConfirmComponent, {disableClose: true}, () => {
        this.emitService.getImageSource.next(this.imageSource);
        this.router.navigate([RoutingAPI.WEB_CAM_IMAGE]);
      });
    } else {
      this.commonService.openModal(ConfirmComponent, { data: {content: 'Please capture a snap.', header: 'Warning!'}, panelClass: 'error' });
    }
  }

  private openCamera() {
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        this.streams = stream;
        this.video.nativeElement.srcObject = stream;
        this.video.nativeElement.play();
      });
    }
  }

}
