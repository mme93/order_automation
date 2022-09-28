import {Component} from '@angular/core';
import {LoginService} from '../../../services/http/account/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = 'admin';
  password = 'admin';
  isLoading = false;

  constructor(
    private loginService: LoginService,
    private route: Router
  ) {
  }

  login() {
    this.isLoading = true;
    this.loginService.login(this.username, this.password).subscribe(
      response => {
        this.isLoading = false;
        localStorage.setItem('token', response.jwtToken);
        localStorage.setItem('company', response.company);
        this.route.navigate(['home']);
      }, error => {
        this.isLoading = false;
        console.log(error);
      }
    );
  }

}
