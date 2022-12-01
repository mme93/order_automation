import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {TokenService} from '../services/http/token/token.service';


@Injectable({
  providedIn: 'root'
})
export class RoutingGuard implements CanActivate {

  constructor(private tokenService: TokenService) {
  }

  canActivate() {
    return this.tokenService.isTokenExpired();
  }

}
