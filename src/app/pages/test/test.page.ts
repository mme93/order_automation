import {Component, OnInit} from '@angular/core';
import {
  CalendarModel,
  CalendarMonth,
  CalendarMonthView,
  CalendarService
} from '../../shared/services/tools/calendar/calendar.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  months = ['January', 'February', 'March', 'April', 'Mai', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December'];
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  mode = ['month', 'week', 'day'];
  years = this.calendarService.getYears();
  currentYearIndex = this.calendarService.getCurrentYearIndex();
  currentMonthIndex = this.calendarService.getCurrentMonthIndex();
  shownYear = this.years[this.currentYearIndex];
  shownMonth = this.months[this.currentMonthIndex];
  calendarModel: CalendarModel = {years: []};


  constructor(private calendarService: CalendarService) {
  }

  ngOnInit() {

    this.calendarModel = this.calendarService.getCalendarDates();
    this.calendarService.getCalendarMonthRow(this.calendarService.getCalendarMonthView(
      this.calendarModel, this.currentYearIndex, this.currentMonthIndex));
  }


  next() {

  }

  back() {

  }

  today() {

  }

  changeMode(month: string) {

  }
}
