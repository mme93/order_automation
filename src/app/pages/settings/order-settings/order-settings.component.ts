import {Component, OnInit} from '@angular/core';
import {OrderSettings} from '../../../shared/model/order/orderSettings';
import {Todo} from '../../../shared/model/order/todo';
import {OrderService} from '../../../shared/services/http/order/order.service';

@Component({
  selector: 'app-order-settings',
  templateUrl: './order-settings.component.html',
  styleUrls: ['./order-settings.component.scss'],
})
export class OrderSettingsComponent implements OnInit {
  newTodo = '';
  orderSettings: OrderSettings | undefined;
  todos: Todo[] = [];

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {


  }

  saveSettings() {

  }

  deleteTodo(name: string) {
    this.todos = this.todos.filter(todo => todo.name !== name);
  }

  addToDo(newTodo: string) {
    if (newTodo.length > 0 && this.todos.filter(todo => todo.name === newTodo).length === 0) {
      this.todos.push({name: newTodo});
      this.newTodo = '';
    }
  }
}
