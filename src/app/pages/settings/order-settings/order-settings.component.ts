import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../services/http/order/order.service';
import {OrderSettings} from '../../../model/order/orderSettings';
import {Todo} from '../../../model/order/todo';

@Component({
  selector: 'app-order-settings',
  templateUrl: './order-settings.component.html',
  styleUrls: ['./order-settings.component.scss'],
})
export class OrderSettingsComponent implements OnInit {
  newTodo='';
  orderSettings: OrderSettings;
  todos: Todo[] = [];

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.orderSettings = this.orderService.getOrderSettings();
    this.todos = this.orderService.getTodos();
  }

  saveSettings() {
    this.orderService.saveOrderSettings(this.orderSettings);
  }

  deleteTodo(name: string) {
    this.todos = this.todos.filter(todo => todo.name !== name);
  }

  addToDo(newTodo: string) {
    if(newTodo.length>0 && this.todos.filter(todo=>todo.name===newTodo).length===0){
      this.todos.push({name:newTodo});
      this.newTodo='';
    }
  }
}
