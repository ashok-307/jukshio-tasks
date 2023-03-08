import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'src/app/services/common.service';
import { ConfirmComponent } from 'src/app/shared/modals/confirm/confirm.component';

@Component({
  selector: 'app-form-with-validations',
  templateUrl: './form-with-validations.component.html',
  styleUrls: ['./form-with-validations.component.scss']
})
export class FormWithValidationsComponent implements OnInit {

  public userForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  public onInputKeyDown(event: KeyboardEvent):boolean | void {
    return this.onlyNumbers(event);
  }

  public onInputNameKeyDown(event: KeyboardEvent):boolean | void {
    return this.onlyCharacters(event);
  }

  public onFormSubmit() {
    console.log('Value :', this.userForm);
    if (this.userForm.valid) {
      const { name, gender, phone, email } = this.userForm.value;
      const beforeName = this.userForm.get('beforeName')?.value;
      const finalData = {
        'Name': `${beforeName} ${name}`,
        'Gender': gender,
        'Phone': `91-`+phone,
        'Email': email,
      };
      let content = `<code>${JSON.stringify(finalData)}</code>`;
      this.commonService.openModal(ConfirmComponent, {data: {content}, disableClose: true});
      // this.matDialog.open(ConfirmComponent, { data: {content}, position: {top: 'top'}, width: '500px' ,disableClose: true });
    }
  }

  private onlyNumbers(event: KeyboardEvent): any {
    let key = event.keyCode;
    if (event.ctrlKey) {
      if (event.key.toLowerCase() === 'a' || event.key.toLowerCase() === 'c' || event.key.toLowerCase() === 'v' || event.key.toLowerCase() === 'x') {
        return true;
      }
    }
    if(( ((key < 48 || key > 57)) && (key < 96 || key > 105)) && key !=8 && key != 190 && key != 110) {
      event.preventDefault();
    } else {
      return true;
    }
  }

  private onlyCharacters(event: KeyboardEvent): any {
    let key = event.keyCode;
    if (event.ctrlKey) {
      if (event.key.toLowerCase() === 'a' || event.key.toLowerCase() === 'c' || event.key.toLowerCase() === 'v' || event.key.toLowerCase() === 'x') {
        return true;
      }
    }
    if((key > 47 && key < 58) || (key > 95 && key < 106)) {
      event.preventDefault();
    } else {
      return true;
    }
  }

  private buildForm() {
    this.userForm = this.formBuilder.group({
      beforeName: [{value: 'Mr.', disabled: true}],
      name: ['', [Validators.required]],
      gender: ['Male', [Validators.required]],
      phone: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9\._]+@[a-z\-]+\.([a-z]+\.[a-z]{2,3}|[a-z]+)$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.{10,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/)]]
    }, {validators: [
      (form) => {
        const name: string = form.get('name')?.value;
        if (name) {
          const code = name[0].charCodeAt(0);
          if (code > 64 && code < 91) {
            return null;
          }
        }
        return { name: true }; // Error object if name value does not start with Capital letter.
      }
    ]});

    // this.userForm.get('beforeName')?.disable();

    this.userForm.get('gender')?.valueChanges.subscribe((g) => {
      const beforeName = g === 'Male' ? 'Mr.'  : 'Mrs.';
      this.userForm.patchValue({
        beforeName: beforeName
      });
    })
  }
}
