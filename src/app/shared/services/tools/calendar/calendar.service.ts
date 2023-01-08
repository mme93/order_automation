import {Injectable} from '@angular/core';
import {Order} from '../../../model/order/order';

export interface CalendarModel {
  years: CalendarYear[];
  orders: Order[];
}

export interface CalendarYear {
  months: CalendarMonth[];
}

export interface CalendarMonth {
  month: CalendarDay[];
}

export interface CalendarDay {
  days: Date;
}

export interface CalendarMonthView {
  day: number;
  date: Date;
  isCurrentMonth: boolean;
  calendarEvent: CalendarEvent[];
  css: string;
  defaultCSS: string;
}

export interface CalendarMonthViewRow {
  monthRow: CalendarMonthView[];
}

export interface CalendarWeekView {
  days: CalendarDay;
  isCurrentMonth: boolean;
}

export interface CalendarEvent {
  start: Date;
  end: Date;
  startTime: string;
  endTime: string;
  title: string;
  eventArt: string;
  eventID: number;
}


@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  getCalenderWeekTitle(week: CalendarMonthView[]) {
    let month = week[0].date.getMonth() + 1;
    let startDay;
    if (week[0].date.getDate() < 10) {
      startDay = '0' + week[0].date.getDate();
    } else {
      startDay = week[0].date.getDate();
    }
    let startMonth;
    if (month < 10) {
      startMonth = '0' + month;
    } else {
      startMonth = month;
    }
    let endDay;
    if (week[6].date.getDate() < 10) {
      endDay = '0' + week[6].date.getDate();
    } else {
      endDay = week[6].date.getDate();
    }
    let endMonth;
    month = week[6].date.getMonth() + 1;
    if (month < 10) {
      endMonth = '0' + month;
    } else {
      endMonth = month;
    }

    return startDay + '.' + startMonth + '.' + week[0].date.getFullYear() + ' - ' +
      endDay + '.' + endMonth + '.' + week[6].date.getFullYear();
  }

  getStartSelectedIndex(calendarMonthViewRow: CalendarMonthViewRow) {
    let monthArrayIndex = 0;
    // @ts-ignore
    for (const day of calendarMonthViewRow) {
      if (day.isCurrentMonth) {
        break;
      } else {
        monthArrayIndex++;
      }
    }
    return monthArrayIndex;
  }

  getOrderFilter(year: number, month: number, day: number, orders: Order[]) {
    return orders.filter(value =>
      new Date(value.startDate).getDay() === day
      && new Date(value.startDate).getMonth() === month
      && new Date(value.startDate).getFullYear() === year);
  }

  getCalendarMonthView(calendarModel: CalendarModel, yearsIndex: number, monthsIndex: number): CalendarMonthView[] {
    const month: CalendarMonthView[] = [];
    let beforeMonthDays = 0;
    if (monthsIndex === 0) {
      // @ts-ignore
      beforeMonthDays = calendarModel.years[yearsIndex][0][0].days.getDay();
    } else if (monthsIndex === 11) {
      // @ts-ignore
      beforeMonthDays = calendarModel.years[yearsIndex][11][0].days.getDay();
    } else {
      // @ts-ignore
      beforeMonthDays = calendarModel.years[yearsIndex][monthsIndex][0].days.getDay();
    }
    beforeMonthDays = (beforeMonthDays === 0) ? 6 : beforeMonthDays - 1;
    // @ts-ignore
    const monthsSize = calendarModel.years[yearsIndex][monthsIndex].length;
    let monthViewSize = 35;
    if (monthsSize + beforeMonthDays > 35) {
      monthViewSize = 42;
    }
    let afterDay = 0;
    let currentDay = 0;
    for (let i = 0; i < monthViewSize; i++) {
      const calendarEvent: CalendarEvent[] = [];
      if (i < beforeMonthDays) {
        let testDate;
        let currentMonthSize = 0;
        if (monthsIndex === 0) {
          // @ts-ignore
          currentMonthSize = calendarModel.years[yearsIndex - 1][11].length;
          // @ts-ignore
          testDate = calendarModel.years[yearsIndex - 1][11][currentMonthSize - beforeMonthDays + i].days;
          this.getOrderFilter(yearsIndex + 1950 - 1, 11, currentMonthSize - beforeMonthDays + i, calendarModel.orders).forEach(order => {
            calendarEvent.push({
              start: order.startDate,
              end: order.endDate,
              title: order.orderInformation,
              eventArt: 'order',
              eventID: order.id,
              startTime: this.getTimeFromDate(order.startDate),
              endTime: this.getTimeFromDate(order.endDate)
            });
          });
        } else if (monthsIndex === 11) {
          // @ts-ignore
          currentMonthSize = calendarModel.years[yearsIndex - 1][10].length;
          // @ts-ignore
          testDate = calendarModel.years[yearsIndex - 1][10][currentMonthSize - beforeMonthDays + i].days;
          this.getOrderFilter(yearsIndex + 1950 - 1, 10, currentMonthSize - beforeMonthDays + i, calendarModel.orders).forEach(order => {
            calendarEvent.push({
              start: order.startDate,
              end: order.endDate,
              title: order.orderInformation,
              eventArt: 'order',
              eventID: order.id,
              startTime: this.getTimeFromDate(order.startDate),
              endTime: this.getTimeFromDate(order.endDate)
            });
          });
        } else {
          // @ts-ignore
          currentMonthSize = calendarModel.years[yearsIndex][monthsIndex - 1].length;
          // @ts-ignore
          testDate = calendarModel.years[yearsIndex][monthsIndex - 1][currentMonthSize - beforeMonthDays + i].days;
          this.getOrderFilter(yearsIndex + 1950, monthsIndex - 1, currentMonthSize - beforeMonthDays + i, calendarModel.orders).forEach(
            order => {
              calendarEvent.push({
                start: order.startDate,
                end: order.endDate,
                title: order.orderInformation,
                eventArt: 'order',
                eventID: order.id,
                startTime: this.getTimeFromDate(order.startDate),
                endTime: this.getTimeFromDate(order.endDate)
              });
            });
        }
        month.push({
          day: (currentMonthSize - beforeMonthDays + i + 1),
          date: testDate,
          isCurrentMonth: false,
          calendarEvent,
          css: 'calendar_col_not_current_month',
          defaultCSS: 'calendar_col_not_current_month'
        });
      } else if (i > monthsSize + beforeMonthDays - 1) {
        let testDate;
        if (monthsIndex === 0) {
          // @ts-ignore
          testDate = calendarModel.years[yearsIndex][1][afterDay].days;
          this.getOrderFilter(yearsIndex + 1950, 1, afterDay, calendarModel.orders).forEach(order => {
            calendarEvent.push({
              start: order.startDate,
              end: order.endDate,
              title: order.orderInformation,
              eventArt: 'order',
              eventID: order.id,
              startTime: this.getTimeFromDate(order.startDate),
              endTime: this.getTimeFromDate(order.endDate)
            });
          });
        } else if (monthsIndex === 11) {
          // @ts-ignore
          testDate = calendarModel.years[yearsIndex + 1][0][afterDay].days;
          this.getOrderFilter(yearsIndex + 1950 + 1, 0, afterDay, calendarModel.orders).forEach(order => {
            calendarEvent.push({
              start: order.startDate,
              end: order.endDate,
              title: order.orderInformation,
              eventArt: 'order',
              eventID: order.id,
              startTime: this.getTimeFromDate(order.startDate),
              endTime: this.getTimeFromDate(order.endDate)
            });
          });
        } else {
          // @ts-ignore
          testDate = calendarModel.years[yearsIndex][monthsIndex + 1][afterDay].days;
          this.getOrderFilter(yearsIndex + 1950, monthsIndex + 1, afterDay, calendarModel.orders).forEach(order => {
            calendarEvent.push({
              start: order.startDate,
              end: order.endDate,
              title: order.orderInformation,
              eventArt: 'order',
              eventID: order.id,
              startTime: this.getTimeFromDate(order.startDate),
              endTime: this.getTimeFromDate(order.endDate)
            });
          });
        }
        month.push({
          day: afterDay + 1,
          // @ts-ignore
          date: testDate,
          isCurrentMonth: false,
          calendarEvent,
          css: 'calendar_col_not_current_month',
          defaultCSS: 'calendar_col_not_current_month'
        });
        afterDay++;
      } else {
        let currentDate;
        if (monthsIndex === 0) {
          // @ts-ignore
          currentDate = calendarModel.years[yearsIndex][0][currentDay].days;
          this.getOrderFilter(yearsIndex + 1950, 0, currentDay, calendarModel.orders).forEach(order => {
            calendarEvent.push({
              start: order.startDate,
              end: order.endDate,
              title: order.orderInformation,
              eventArt: 'order',
              eventID: order.id,
              startTime: this.getTimeFromDate(order.startDate),
              endTime: this.getTimeFromDate(order.endDate)
            });
          });
        } else if (monthsIndex === 11) {
          // @ts-ignore
          currentDate = calendarModel.years[yearsIndex][11][currentDay].days;
          this.getOrderFilter(yearsIndex + 1950, 11, currentDay, calendarModel.orders).forEach(order => {
            calendarEvent.push({
              start: order.startDate,
              end: order.endDate,
              title: order.orderInformation,
              eventArt: 'order',
              eventID: order.id,
              startTime: this.getTimeFromDate(order.startDate),
              endTime: this.getTimeFromDate(order.endDate)
            });
          });
        } else {
          // @ts-ignore
          currentDate = calendarModel.years[yearsIndex][monthsIndex][currentDay].days;
          this.getOrderFilter(yearsIndex + 1950, monthsIndex, currentDay + 1, calendarModel.orders).forEach(order => {
            calendarEvent.push({
              start: order.startDate,
              end: order.endDate,
              title: order.orderInformation,
              eventArt: 'order',
              eventID: order.id,
              startTime: this.getTimeFromDate(order.startDate),
              endTime: this.getTimeFromDate(order.endDate)
            });
          });
        }
        month.push({
          day: currentDay + 1,
          // @ts-ignore
          date: currentDate,
          isCurrentMonth: true,
          calendarEvent,
          css: 'calendar_col',
          defaultCSS: 'calendar_col'
        });

        currentDay++;
      }
    }
    return month;
  }

  getTimeFromDate(date: Date) {
    date = new Date(date);
    return date.getHours() + ':' + date.getMinutes();
  }

  getCalendarMonthRow(month: CalendarMonthView[]) {
    const rows: CalendarMonthViewRow[] = [];
    let row: CalendarMonthView[] = [];
    for (let i = 0; i < (month.length / 7); i++) {
      row.push(month[i * 7]);
      row.push(month[1 + (i * 7)]);
      row.push(month[2 + (i * 7)]);
      row.push(month[3 + (i * 7)]);
      row.push(month[4 + (i * 7)]);
      row.push(month[5 + (i * 7)]);
      row.push(month[6 + (i * 7)]);
      // @ts-ignore
      rows.push(row);
      row = [];
    }
    return rows;
  }

  getCurrentDayIndex() {
    let firstDayIndex = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      1
    ).getDay();
    firstDayIndex = (firstDayIndex === 0) ? 6 : firstDayIndex - 1;
    const dayInMonth = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    ).getDate();
    return firstDayIndex + dayInMonth - 1;
  }

  getCurrentYearIndex() {
    return new Date().getFullYear() - 1950;
  }

  getCurrentMonthIndex() {
    return new Date().getMonth();
  }

  getCalendarDates(): CalendarModel {
    const years: CalendarYear[] = [];
    for (let i = 0; i < 100; i++) {
      // @ts-ignore
      years.push(this.getYear(1950 + i));
    }
    return {
      years,
      orders: []
    };
  }

  getYear(year: number): CalendarMonth[] {
    const months: CalendarMonth[] = [];
    for (let i = 0; i < 12; i++) {
      // @ts-ignore
      months.push(this.getDaysInMonth(i, year));
    }
    return months;
  }

  getDaysInMonth(month: number, year: number): CalendarDay[] {
    const date = new Date(year, month, 1);
    const days: CalendarDay[] = [];
    while (date.getMonth() === month) {
      days.push({days: new Date(date)});
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  getYears() {
    const years: number [] = [];
    for (let i = 1950; i < 2050; i++) {
      years.push(i);
    }
    return years;
  }

  getFirstDayIndexFromMonth(currentYearIndex: number, currentMonthIndex: number) {
    const date = new Date(1950 + currentYearIndex, currentMonthIndex, 1);
    return (date.getDay() === 0) ? 6 : date.getDay() - 1;
  }

  getLastDayIndexFromMonth(currentYearIndex: number, currentMonthIndex: number) {

  }

}
