import {Component, OnInit} from '@angular/core';
import {User} from '../../../shared/model/firm/user';
import {Company} from '../../../shared/model/firm/company';
import {CompanyService} from '../../../shared/services/http/company/company.service';



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
