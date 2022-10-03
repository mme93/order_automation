import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../services/http/account/account.service';
import {User} from '../../../model/firm/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  user: User = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    callNumber: '',
    company: '',
    roll: '',
    info: ''
  };

  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
    this.accountService.getAccount().subscribe(user => this.user = user);
  }

}
