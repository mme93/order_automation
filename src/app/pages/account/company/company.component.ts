import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../../../services/http/company/company.service';
import {Company} from '../../../model/firm/company';
import {User} from '../../../model/firm/user';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  users: User[] = [];
  company: Company = {
    companyName: '',
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    street: '',
    postalCode: '',
    callNumber: '',
    sector: '',
    userDtoList: this.users
  };

  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    this.companyService.getCompany().subscribe(company => this.company = company);
  }

}
