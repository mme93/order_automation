import {Component} from '@angular/core';
import {LoginService} from '../../../services/http/account/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username='admin';
  password='admin';
  constructor(private loginService: LoginService) {
  }

  login() {
    this.loginService.login(this.username,this.password).subscribe(
      response => {
        localStorage.setItem('token',response.jwtToken);
      }, error => {
        console.log(error);
      }
    );
  }

}
