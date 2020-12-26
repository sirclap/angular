import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, LoginRequest, LoginResponse } from '@core/api/auth';
import { SessionService } from '@core/auth/service/session.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  public loginForm: FormGroup;
  public emailControl: FormControl;
  public passwordControl: FormControl;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private sessionService: SessionService,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.loginForm = this.fb.group({
      email: ['master8@lemoncode.net', Validators.required],
      password: ['12345678', Validators.required],
    });

    this.emailControl = this.loginForm.get('email') as FormControl;
    this.passwordControl = this.loginForm.get('password') as FormControl;
  }

  public login(): void {
    this.authService.login(new LoginRequest(this.loginForm.value)).subscribe(
      (loginResponse: LoginResponse) => {
        this.sessionService.setCurrentToken(loginResponse.accessToken);
        this.router.navigate(['dashboard']);
      },
      (error) => console.log('Error')
    );
  }
}
