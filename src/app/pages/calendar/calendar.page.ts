import {Component, OnInit, ViewChild} from '@angular/core';
import {CalendarMode} from 'ionic2-calendar/calendar';
import {CalendarComponent} from 'ionic2-calendar';
import {ModalController} from '@ionic/angular';
import {EventdetailsPage} from './eventdetails/eventdetails.page';
import {CalendarService} from '../../shared/services/http/calendar/calendar.service';

export interface CalendarView {
  title: string;
  description: string;
  startTime: string;
  endTime: string;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  //https://www.youtube.com/watch?v=V8zPORSbX7Y
  //https://ionicframework.com/docs/api/modal

  @ViewChild(CalendarComponent, null) myCal: CalendarComponent;

  myData = [
    {
      title: 'My first Event',
      description: 'My first Description',
      startTime: new Date('November 27, 2022 13:15:30'),
      endTime: new Date('November 27, 2022 23:15:30'),
    },
    {
      title: 'My second Event',
      description: 'My second Description',
      startTime: new Date('November 18, 2022 13:15:30'),
      endTime: new Date('November 18, 2022 23:15:30'),
    },
    {
      title: 'My third Event',
      description: 'My third Description',
      startTime: new Date('November 17, 2022 13:15:30'),
      endTime: new Date('November 17, 2022 23:15:30'),
    },
    {
      title: 'My third Event',
      description: 'My third Description',
      startTime: new Date('November 17, 2022 13:15:30'),
      endTime: new Date('November 17, 2022 23:15:30'),
    },
    {
      title: 'My third Event',
      description: 'My third Description',
      startTime: new Date('November 17, 2022 13:15:30'),
      endTime: new Date('November 17, 2022 23:15:30'),
    },
    {
      title: 'My third Event',
      description: 'My third Description',
      startTime: new Date('November 17, 2022 13:15:30'),
      endTime: new Date('November 17, 2022 23:15:30'),
    },
    {
      title: 'My fith Event',
      description: 'My fith Description',
      startTime: new Date('November 16, 2022 13:15:30'),
      endTime: new Date('November 16, 2022 23:15:30'),
    },
    {
      title: 'Masdasdasdsent',
      description: 'My fith Description',
      startTime: new Date('November 22, 2022 21:24:54'),
      endTime: new Date('November 22, 2022 22:24:54'),
    }
  ];

  allEvents = [];
  currentMonth: string;
  calendar = {
    mode: 'month' as CalendarMode,
    currentDate: new Date()
  };
  newEvent = {
    title: '',
    description: '',
    startTime: '',
    endTime: ''
  };

  showAddenEvent: boolean;

  constructor(
    private modalController: ModalController,
    private calendarService: CalendarService
  ) {
    this.allEvents = this.myData;
  }
  //Todo: Backend Daten werden nicht richtig angezeigt
  ngOnInit() {
    this.calendarService.getCalendarEvents().subscribe(
      result => {
        result.forEach(event => {
          console.log(event.startTime+' | '+event.endTime);
          this.allEvents.push({
            title: event.title,
            description: event.description,
            startTime: new Date(event.startTime),
            endTime: new Date(event.endTime)
          });
        });
      }
    );
  }

  onViewTitleChanged(title: string) {
    this.currentMonth = title;
  }

  async onEventSelected(ev) {
    this.newEvent = ev;
    const modal = await this.modalController.create({
      component: EventdetailsPage,
      componentProps: ev
    });
    await modal.present();
  }

  next() {
    this.myCal.slideNext();
  }

  back() {
    this.myCal.slidePrev();
  }

  showHideForm() {
    this.showAddenEvent = !this.showAddenEvent;
    this.newEvent = {
      title: '',
      description: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString()
    };
  }

  today() {
    this.calendar.currentDate = new Date();
  }

  changeMode(mode: string) {
    this.calendar.mode = mode as CalendarMode;
  }

  addEvent() {
    this.allEvents.push({
      title: this.newEvent.title,
      description: this.newEvent.description,
      startTime: new Date(this.newEvent.startTime),
      endTime: new Date(this.newEvent.endTime)
    });
    this.showAddenEvent = !this.showAddenEvent;
  }
}
