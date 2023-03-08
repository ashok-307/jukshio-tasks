import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingAPI } from 'src/app/constants/route.constant';
import { EmitService } from 'src/app/services/emit.service';
import { ConfirmComponent } from 'src/app/shared/modals/confirm/confirm.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-webcam-image',
  templateUrl: './webcam-image.component.html',
  styleUrls: ['./webcam-image.component.scss']
})
export class WebcamImageComponent implements OnInit {

  public imageSource: string = '';
  constructor(
    private emitService: EmitService,
    private router: Router,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.emitService.getImageData().subscribe((imageSource: string) => {
      this.imageSource = imageSource;
    })
  }


}
