import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '../providers/CustomValidators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required , Validators.minLength(6)]),
    }, [CustomValidators.MatchValidator('password', 'confirmPassword')]);
    constructor() { }

  ngOnInit(): void {
  }
  get passwordMatchError() {
    return (
      this.loginForm.getError('mismatch') &&
      this.loginForm.get('confirmPassword')?.touched
    );
  }
}
