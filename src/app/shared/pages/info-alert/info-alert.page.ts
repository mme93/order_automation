import {Component, Input} from '@angular/core';
import {NavParams} from '@ionic/angular';

@Component({
  selector: 'app-info-alert',
  templateUrl: './info-alert.page.html',
  styleUrls: ['./info-alert.page.scss'],
})
export class InfoAlertPage {
  contentText: string;

  constructor(private navParams: NavParams) {
    this.contentText = this.navParams.get('contentText');
  }

  action(action: boolean) {
    console.log(action);
  }
}
