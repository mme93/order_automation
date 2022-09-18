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

  constructor(
    private loginService: LoginService,
    private route: Router
  ) {
  }

  login() {
    this.loginService.login(this.username, this.password).subscribe(
      response => {
        localStorage.setItem('token', response.jwtToken);
        this.route.navigate(['home']);
      }, error => {
        console.log(error);
      }
    );
  }

}
