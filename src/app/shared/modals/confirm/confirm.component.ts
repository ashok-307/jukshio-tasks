import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface ModalDataRef {
  header?: string;
  content?: string;
}

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ModalDataRef
  ) {}

  @Input() public header: string = 'Header!';
  @Input() public content: string = 'Task has been completed.';

  ngOnInit(): void {
    this.header = this.data && this.data.header ? this.data.header : 'Completed!';
    this.content = this.data && this.data.content ? this.data.content : 'Task has been completed.';
  }

}
