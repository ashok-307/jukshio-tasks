import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingAPI } from 'src/app/constants/route.constant';
import { CommonService } from 'src/app/services/common.service';
import { ConfirmComponent } from 'src/app/shared/modals/confirm/confirm.component';

@Component({
  selector: 'app-draw-rect',
  templateUrl: './draw-rect.component.html',
  styleUrls: ['./draw-rect.component.scss']
})
export class DrawRectComponent implements OnInit {
  constructor(
    private commonService: CommonService,
    private router: Router
  ) { }

  private readonly blockClass: string = 'image-crop-block';
  private dimensions: any = {};
  private isDrag: boolean = false;
  private divBlock!: HTMLElement;

  @ViewChild('imageBlock') public imageBlock!: ElementRef<HTMLElement>;

  ngOnInit(): void {
  }

  public onDown(event: MouseEvent) {
    this.isDrag = true;
    const pointX = event.offsetX;
    const pointY = event.offsetY;

    this.dimensions.firstX = pointX;
    this.dimensions.firstY = pointY;

    // Remove block
    const block = document.querySelector('.'+this.blockClass);
    block && this.imageBlock.nativeElement.removeChild(this.divBlock);

    // Create block
    this.divBlock = document.createElement('div');
    this.divBlock.setAttribute('class', this.blockClass);

    // Add Position
    this.divBlock.style.left = (pointX) + 'px';
    this.divBlock.style.top = (pointY) + 'px';

    // Append block
    this.imageBlock.nativeElement.appendChild(this.divBlock);

  }

  public onUp(event: MouseEvent) {
    this.isDrag = false;
    this.dimensions = {};
  }

  public onMove(event: MouseEvent) {
    if (this.isDrag) {
      // Add Block Dimension
      const w = (event.offsetX - this.dimensions.firstX);
      const h = (event.offsetY - this.dimensions.firstY);
      this.divBlock.style.width = (w) + 'px';
      this.divBlock.style.height = (h) + 'px';
    }
  }

  public onComplete() {
    const block = document.querySelector('.'+this.blockClass);
    if (block) {
      this.commonService.openModal(ConfirmComponent, {disableClose: true}, () => {
        this.router.navigate([RoutingAPI.FORMS]);
      });
    }
  }
}
