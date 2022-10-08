import {Component} from '@angular/core';
import {LoginService} from '../../../services/http/account/login.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = 'admin';
  password = 'admin';
  isLoading = false;
  isLogin = true;

  constructor(
    private loginService: LoginService,
    private route: Router,
    public formBuilder: FormBuilder
  ) {
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  ionicForm = this.formBuilder.group({
    name: ['dhall', [Validators.required, Validators.minLength(1)]],
    password: ['admin', [Validators.required, Validators.minLength(1)]]
  });

  login() {
    this.isLoading = true;

    this.loginService.login(this.ionicForm.controls.name.value, this.ionicForm.controls.password.value).subscribe(
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
