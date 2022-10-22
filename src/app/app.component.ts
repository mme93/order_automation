import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
    private menuController: MenuController
    ) {
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/account/login']);
  }

  closeMenu() {
  this.menuController.close('main-menu');
  }
}
