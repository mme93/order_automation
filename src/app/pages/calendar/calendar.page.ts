import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {EventdetailsPage} from './eventdetails/eventdetails.page';
import {
  CalendarModel,
  CalendarMonthView,
  CalendarMonthViewRow,
  CalendarService
} from '../../shared/services/tools/calendar/calendar.service';
import {OrderService} from '../../shared/services/http/order/order.service';
import {Order} from '../../shared/model/order/order';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  months = ['January', 'February', 'March', 'April', 'Mai', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December'];
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  mode = ['month', 'week', 'day'];
  hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  years = this.calendarService.getYears();
  todayYearIndex = this.calendarService.getCurrentYearIndex();
  todayMonthIndex = this.calendarService.getCurrentMonthIndex();
  todayDayIndex = this.calendarService.getCurrentDayIndex();
  currentYearIndex = this.calendarService.getCurrentYearIndex();
  currentMonthIndex = this.calendarService.getCurrentMonthIndex();
  shownYear = this.years[this.currentYearIndex];
  shownMonth = this.months[this.currentMonthIndex];
  calendarModel: CalendarModel = {years: [], orders: []};
  rows: CalendarMonthViewRow[] = [];
  month: CalendarMonthView[] = [];
  currentMode = 'month';
  selectedRowIndex = 0;
  exampleText = ['12:15 Herr Mueller, TÜV', '13:30 Mittags Pause', '14:00 Wartung des Fords MH-XX-123'];

  constructor(
    private modalController: ModalController,
    private calendarService: CalendarService,
    private orderService: OrderService
  ) {
  }

  async ngOnInit() {
    this.calendarModel = this.calendarService.getCalendarDates();
    const orders = await Promise.all([this.orderService.getOrders().toPromise()]) as unknown as Order[];
    // @ts-ignore
    this.calendarModel.orders = orders[0];
    this.month = this.calendarService.getCalendarMonthView(
      this.calendarModel, this.currentYearIndex, this.currentMonthIndex);
    this.rows = this.calendarService.getCalendarMonthRow(this.month);
  }

  next() {
    if (this.currentMonthIndex === 11) {
      this.currentMonthIndex = 0;
      this.currentYearIndex = this.currentYearIndex + 1;
      this.month = this.calendarService.getCalendarMonthView(
        this.calendarModel, this.currentYearIndex, this.currentMonthIndex);
      this.rows = this.calendarService.getCalendarMonthRow(this.month);
    } else {
      this.currentMonthIndex++;
      this.month = this.calendarService.getCalendarMonthView(
        this.calendarModel, this.currentYearIndex, this.currentMonthIndex);
      this.rows = this.calendarService.getCalendarMonthRow(this.month);
    }
    this.shownMonth = this.months[this.currentMonthIndex];
    this.shownYear = this.years[this.currentYearIndex];
  }

  back() {
    if (this.currentMonthIndex === 0) {
      this.currentMonthIndex = 11;
      this.currentYearIndex = this.currentYearIndex - 1;
      this.month = this.calendarService.getCalendarMonthView(
        this.calendarModel, this.currentYearIndex, this.currentMonthIndex);
      this.rows = this.calendarService.getCalendarMonthRow(this.month);
    } else {
      this.currentMonthIndex--;
      this.month = this.calendarService.getCalendarMonthView(
        this.calendarModel, this.currentYearIndex, this.currentMonthIndex);
      this.rows = this.calendarService.getCalendarMonthRow(this.month);
    }
    this.shownMonth = this.months[this.currentMonthIndex];
    this.shownYear = this.years[this.currentYearIndex];
  }

  today() {
    this.currentYearIndex = this.todayYearIndex;
    this.currentMonthIndex = this.todayMonthIndex;
    this.shownMonth = this.months[this.currentMonthIndex];
    this.shownYear = this.years[this.currentYearIndex];
    this.currentMode = 'month';
    this.month = this.calendarService.getCalendarMonthView(
      this.calendarModel, this.currentYearIndex, this.currentMonthIndex);
    this.rows = this.calendarService.getCalendarMonthRow(this.month);
  }

  changeMode(mode: string) {
    this.currentMode = mode;
  }

  async onEventSelected() {
    const modal = await this.modalController.create({
      component: EventdetailsPage,
      // @ts-ignore
      componentProps: null
    });
    await modal.present();
  }
}
