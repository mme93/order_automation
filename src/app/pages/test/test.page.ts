import {Component, OnInit} from '@angular/core';
import {
  CalendarModel,
  CalendarMonth,
  CalendarMonthView, CalendarMonthViewRow,
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
  rows: CalendarMonthViewRow[] = [];
  month: CalendarMonthView[] = [];

  constructor(private calendarService: CalendarService) {
  }

  ngOnInit() {
    this.calendarModel = this.calendarService.getCalendarDates();
    this.month = this.calendarService.getCalendarMonthView(
      this.calendarModel, this.currentYearIndex, this.currentMonthIndex);
    this.rows = this.calendarService.getCalendarMonthRow(this.month);
  }


  next() {
    if(this.currentMonthIndex===11){
      this.currentMonthIndex=0;
      this.currentYearIndex=this.currentMonthIndex+1;
      this.month = this.calendarService.getCalendarMonthView(
        this.calendarModel, this.currentYearIndex, this.currentMonthIndex);
      this.rows = this.calendarService.getCalendarMonthRow(this.month);
    }else{
      this.currentMonthIndex++;
      this.month = this.calendarService.getCalendarMonthView(
        this.calendarModel, this.currentYearIndex, this.currentMonthIndex);
      this.rows = this.calendarService.getCalendarMonthRow(this.month);
    }
    this.shownMonth = this.months[this.currentMonthIndex];
    this.shownYear = this.years[this.currentYearIndex];
  }

  back() {
    if(this.currentMonthIndex===0){
      this.currentMonthIndex=11;
      this.currentYearIndex=this.currentYearIndex-1;
      this.month = this.calendarService.getCalendarMonthView(
        this.calendarModel, this.currentYearIndex, this.currentMonthIndex);
      this.rows = this.calendarService.getCalendarMonthRow(this.month);
    }else{
      this.currentMonthIndex--;
      this.month = this.calendarService.getCalendarMonthView(
        this.calendarModel, this.currentYearIndex, this.currentMonthIndex);
      this.rows = this.calendarService.getCalendarMonthRow(this.month);
    }
    this.shownMonth = this.months[this.currentMonthIndex];
    this.shownYear = this.years[this.currentYearIndex];
  }

  today() {

  }

  changeMode(month: string) {

  }
}
