import {Component} from '@angular/core';

import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {LoginService} from '../../../shared/services/http/account/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLoading = false;
  isLogin = true;

  user = this.formBuilder.group({
    name: ['dhall', [Validators.required, Validators.minLength(1)]],
    password: ['admin', [Validators.required, Validators.minLength(1)]]
  });

  constructor(
    private loginService: LoginService,
    private route: Router,
    public formBuilder: FormBuilder
  ) {
  }

  login() {
    this.isLoading = true;

    this.loginService.login(this.user.controls.name.value, this.user.controls.password.value).subscribe(
      response => {
        this.isLoading = false;
        localStorage.setItem('token', response.token);
        localStorage.setItem('company', response.company);
        localStorage.setItem('userId', response.userId);
        this.route.navigate(['home']);
      }, error => {
        this.isLoading = false;
        this.isLogin = false;
        console.log(error);
      }
    );
  }
}
