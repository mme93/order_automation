import {Injectable} from '@angular/core';

export interface CalendarModel {
  years: CalendarYear[];
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
}

export interface CalendarWeekView {
  days: CalendarDay;
  isCurrentMonth: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  getCalendarMonthView(calendarModel: CalendarModel, yearsIndex: number, monthsIndex: number): CalendarMonthView[] {
    const month: CalendarMonthView[] = [];
    let beforeMonthDays=0;
    if (monthsIndex === 0) {
      // @ts-ignore
      beforeMonthDays = calendarModel.years[yearsIndex][0][0].days.getDay();
    }else if (monthsIndex === 11) {
      // @ts-ignore
      beforeMonthDays = calendarModel.years[yearsIndex][11][0].days.getDay();
    }else {
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
      if (i < beforeMonthDays) {
        let testDate;
        let currentMonthSize = 0;
        if (monthsIndex === 0) {
          // @ts-ignore
          currentMonthSize = calendarModel.years[yearsIndex - 1][11].length;
          // @ts-ignore
          testDate = calendarModel.years[yearsIndex - 1][11][currentMonthSize - beforeMonthDays + i].days;
        } else if (monthsIndex === 11) {
          // @ts-ignore
          currentMonthSize = calendarModel.years[yearsIndex - 1][10].length;
          // @ts-ignore
          testDate = calendarModel.years[yearsIndex - 1][10][currentMonthSize - beforeMonthDays + i].days;
        } else {
          // @ts-ignore
          currentMonthSize = calendarModel.years[yearsIndex][monthsIndex - 1].length;
          // @ts-ignore
          testDate = calendarModel.years[yearsIndex][monthsIndex - 1][currentMonthSize - beforeMonthDays + i].days;
        }
        month.push({
          day: (currentMonthSize - beforeMonthDays + i + 1),
          date: testDate,
          isCurrentMonth: false
        });
      } else if (i > monthsSize + beforeMonthDays - 1) {
        let testDate;
        if (monthsIndex === 0) {
          // @ts-ignore
          testDate = calendarModel.years[yearsIndex][1][afterDay].days;
        } else if (monthsIndex === 11) {
          // @ts-ignore
          testDate = calendarModel.years[yearsIndex + 1][0][afterDay].days;
        } else {
          // @ts-ignore
          testDate = calendarModel.years[yearsIndex][monthsIndex + 1][afterDay].days;
        }
        month.push({
          day: afterDay + 1,
          // @ts-ignore
          date: testDate,
          isCurrentMonth: false
        });
        afterDay++;
      }else{
        let testDate;
        if (monthsIndex === 0) {
          // @ts-ignore
          testDate = calendarModel.years[yearsIndex][0][currentDay].days;
        } else if (monthsIndex === 11) {
          // @ts-ignore
          testDate = calendarModel.years[yearsIndex][11][currentDay].days;
        } else {
          // @ts-ignore
          console.log(i+' | '+monthsSize+' | '+beforeMonthDays);
          // @ts-ignore
          testDate = calendarModel.years[yearsIndex][monthsIndex][currentDay].days;
        }
        month.push({
          day: currentDay + 1,
          // @ts-ignore
          date: testDate,
          isCurrentMonth: false
        });
        currentDay++;
      }
    }
    return month;
  }

  getCalendarWeekView() {

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
      years
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
}
