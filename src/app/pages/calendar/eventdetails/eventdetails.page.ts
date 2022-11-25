import {Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.page.html',
  styleUrls: ['./eventdetails.page.scss'],
})
export class EventdetailsPage implements OnInit {
  title: string;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
    ) {
    this.title=navParams.get('title');
  }

  ngOnInit() {

  }

}
