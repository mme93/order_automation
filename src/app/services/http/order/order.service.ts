import {Injectable} from '@angular/core';
import {OrderSettings} from '../../../model/orderSettings';
import {Todo} from '../../../model/todo';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private defaultOrderSettings: OrderSettings = {
    firstNameVisibility: true,
    lastNameVisibility: true,
    emailVisibility: true,
    orderNumberVisibility: true,
    orderStatusVisibility: true,
    orderInfoVisibility: true,
    toDoVisibility: true,
    toDoStatusVisibility: true,
    toDoInfoVisibility: true
  };

  constructor() {
  }

  getTodos(): Todo[] {
    const todos: Todo[] = [{name: 'Changes tires'},{name: 'Change headlights'},{name: 'Make TÜV'},{name: 'Create bill'}];
    return todos;
  }

  getOrderSettings(): OrderSettings {
    return this.defaultOrderSettings;
  }

  saveOrderSettings(orderSettings: OrderSettings) {
    console.log(orderSettings);
  }
}
