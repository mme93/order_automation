import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CalendarView} from '../../../../pages/calendar/calendar.page';
import {environment} from '../../../../../environments/environment';

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
    return this.http.get<CalendarView[]>(environment.backendUrl+'calendar/'+localStorage.getItem('userId'), httpOptions);
  }
}
