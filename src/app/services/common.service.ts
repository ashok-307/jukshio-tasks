import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmComponent } from '../shared/modals/confirm/confirm.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public modalRef!: MatDialogRef<ConfirmComponent>;

  constructor(
    private matDialog: MatDialog
  ) { }

  public openModal<T>(template: T | any, data: MatDialogConfig, callback?: (value: any) => void) {
    this.modalRef = this.matDialog.open(template, {position: {top: 'top'}, minWidth: '400px', ...data});

    this.modalRef.afterClosed().subscribe((result: any) => {
      callback && callback(result);
    });
  }

  public closeModal() {
    if (this.modalRef) {
      this.modalRef.close();
    }
  }
}
