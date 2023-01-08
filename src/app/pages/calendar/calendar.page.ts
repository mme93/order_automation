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
  week: CalendarMonthView[] = [];
  currentMode = 'week';
  todayRowIndex = Math.floor(this.todayDayIndex / 7);
  todayCalendarWeekNumber = 0;
  selectIndex = this.calendarService.getCurrentDayIndex();
  selectRow = Math.floor(this.selectIndex / 7);
  weekTitle = '';

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
    this.setCurrentDayCSS();
    this.setWeek();
  }

  setWeek() {
    this.week = [];
    for (let i = 0; i < 7; i++) {
      this.week.push(
        this.month[i + (7 * this.selectRow)]
      );
    }
    this.weekTitle = this.calendarService.getCalenderWeekTitle(this.week);
  }

  nextMonth() {
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
  }

  next() {
    if (this.currentMode === 'month') {
      this.nextMonth();
      if (!(this.currentYearIndex === this.todayYearIndex && this.currentMonthIndex === this.todayMonthIndex)) {
        this.selectDay(this.calendarService.getFirstDayIndexFromMonth(this.currentYearIndex, this.currentMonthIndex));
      }
      this.updateCalenderMonthUI();
    } else if (this.currentMode === 'week') {
      this.selectRow++;
      this.month[this.selectIndex].css = this.month[this.selectIndex].defaultCSS;
      if (this.selectRow === (this.month.length / 7) - 1) {
        this.nextMonth();
        this.selectRow = 0;
        this.selectIndex = this.calendarService.getFirstDayIndexFromMonth(this.currentYearIndex, this.currentMonthIndex);
        if (this.todayDayIndex === this.selectIndex) {
          this.month[this.selectIndex].css = 'calendar_selected_today';
        } else {
          this.month[this.selectIndex].css = 'calendar_selected_day';
        }
        this.updateCalenderMonthUI();
      } else {
        this.selectIndex = this.selectIndex + 7;
        if (this.todayDayIndex === this.selectIndex) {
          this.month[this.selectIndex].css = 'calendar_selected_today';
        } else {
          this.month[this.selectIndex].css = 'calendar_selected_day';
        }
      }
      this.setWeek();
    } else if (this.currentMode === 'day') {

    }
  }

  backMonth() {
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
  }

  back() {
    if (this.currentMode === 'month') {
      this.backMonth();
      if (!(this.currentYearIndex === this.todayYearIndex && this.currentMonthIndex === this.todayMonthIndex)) {
        this.selectDay(this.calendarService.getFirstDayIndexFromMonth(this.currentYearIndex, this.currentMonthIndex));
      }
      this.updateCalenderMonthUI();
    } else if (this.currentMode === 'week') {
      this.month[this.selectIndex].css = this.month[this.selectIndex].defaultCSS;
      this.selectRow--;
      if (this.selectRow < 0) {
        this.backMonth();
        this.shownMonth = this.months[this.currentMonthIndex];
        this.shownYear = this.years[this.currentYearIndex];
        this.selectRow = this.rows.length - 2;
        for(let i=0;i<7;i++){
          // @ts-ignore
            if(!this.rows[this.selectRow][i].isCurrentMonth){
              this.selectIndex=(this.selectRow+1)*7-i;
              break;
          }
        }
        this.setWeek();
      } else {
        this.selectIndex = this.selectIndex - 7;
        if (this.todayDayIndex === this.selectIndex) {
          this.month[this.selectIndex].css = 'calendar_selected_today';
        } else {
          this.month[this.selectIndex].css = 'calendar_selected_day';
        }
        this.setWeek();
      }

    } else if (this.currentMode === 'day') {

    }
  }

  setCurrentDayCSS() {
    const rowIndex = Math.floor(this.todayDayIndex / 7);
    // @ts-ignore
    this.rows[rowIndex][this.todayDayIndex - (rowIndex * 7)].css = 'calendar_selected_today';
    // @ts-ignore
    this.rows[rowIndex][this.todayDayIndex - (rowIndex * 7)].oldCSS = 'calendar_col_today';
    this.month[this.selectIndex].defaultCSS = 'calendar_col_today';
  }

  updateCalenderMonthUI() {
    this.shownMonth = this.months[this.currentMonthIndex];
    this.shownYear = this.years[this.currentYearIndex];
    if (this.currentMonthIndex === this.todayMonthIndex && this.currentYearIndex === this.todayYearIndex) {
      this.selectIndex = this.calendarService.getCurrentDayIndex();
      this.setCurrentDayCSS();
    } else {
      this.selectIndex = this.calendarService.getStartSelectedIndex(this.rows[0]);
    }
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
    this.selectIndex = this.calendarService.getCurrentDayIndex();
  }

  changeMode(mode: string) {
    this.currentMode = mode;
  }

  selectDay(index: number) {
    if (this.todayDayIndex === index) {
      this.month[index].css = 'calendar_selected_today';
    } else {
      this.month[index].css = 'calendar_selected_day';
    }
    this.month[this.selectIndex].css = this.month[this.selectIndex].defaultCSS;
    this.selectIndex = index;
    this.selectRow = Math.floor(this.selectIndex / 7);
    this.setWeek();
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
