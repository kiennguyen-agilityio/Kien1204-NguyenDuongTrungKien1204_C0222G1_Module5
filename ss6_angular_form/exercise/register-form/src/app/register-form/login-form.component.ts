import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
// @ts-ignore
import * as moment from 'moment';
import {from} from 'rxjs';
import {CustomValidators} from '../providers/CustomValidators';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required , Validators.minLength(6)]),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, this.age18Check]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]),
  }, [CustomValidators.MatchValidator('password', 'confirmPassword')]);

  constructor() {
  }

  ngOnInit(): void {
  }

  get passwordMatchError() {
    return (
      this.registerForm.getError('mismatch') &&
      this.registerForm.get('confirmPassword')?.touched
    );
  }

  age18Check(abstractControl: AbstractControl): any {
    const sYear = abstractControl.value.substr(0, 4);
    const curYear = new Date().getFullYear();
    return curYear - sYear >= 18 ? null : {not18: true};
  }
}

