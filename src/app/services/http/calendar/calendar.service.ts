import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {CalendarView} from '../../../pages/calendar/calendar.page';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http: HttpClient) { }

  getCalendarEvents() {
    const httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: 'Bearer '+localStorage.getItem('token')
      })
    };
    return this.http.get<CalendarView[]>('http://localhost:8998/calendar/'+localStorage.getItem('userId'), httpOptions);
  }
}
