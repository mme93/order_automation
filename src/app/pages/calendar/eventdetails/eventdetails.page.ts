import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.page.html',
  styleUrls: ['./eventdetails.page.scss'],
})
export class EventdetailsPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {

  }

}
