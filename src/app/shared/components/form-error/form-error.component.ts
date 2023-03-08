import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent {
  constructor() {}

  @Input() public control!: AbstractControl | null;
  @Input() public controlName: string = '';
  @Input() public isError: boolean = false;
  @Input() public customMessage: string = '';
}
