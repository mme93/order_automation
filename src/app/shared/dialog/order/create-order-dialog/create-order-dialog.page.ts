import {Component} from '@angular/core';
import {OrderTodo} from '../../../model/order/todo';
import {MatTableDataSource} from '@angular/material/table';
import {OrderService} from '../../../services/http/order/order.service';
import {Router} from '@angular/router';
import {ModalController, NavParams} from '@ionic/angular';
import {Customer} from '../../../model/firm/customer';

interface TodoTable {
  title: string;
  context: string;
  status: boolean;
}

@Component({
  selector: 'app-create-order-dialog',
  templateUrl: './create-order-dialog.page.html',
  styleUrls: ['./create-order-dialog.page.scss'],
})
export class CreateOrderDialogPage {
  isLoading = false;
  orderInformation = '';
  refNr = '';
  furtherInformation = '';
  createDate: Date = new Date();
  startDate: Date = new Date();
  endDate: Date = new Date();
  orderTodoTitle = '';
  orderTodo = '';
  orderIsStatus = true;
  orderTodos: OrderTodo[] = [];
  isEditOrder: boolean[] = [];
  displayedColumns: string[] = ['position', 'title', 'context', 'status', 'delete'];
  dataSource = new MatTableDataSource<TodoTable>([]);
  todoList: TodoTable[] = [];
  customer: Customer;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private navParams: NavParams,
    private modalController: ModalController
  ) {
    this.dataSource = new MatTableDataSource<TodoTable>(this.todoList);
    this.customer = JSON.parse(this.navParams.get('value'));
  }

  addTodo() {
    this.todoList.push({
      title: this.orderTodoTitle,
      context: this.orderTodo,
      status: this.orderIsStatus
    });

    this.dataSource = new MatTableDataSource<TodoTable>(this.todoList);
    this.isEditOrder.push(true);
    this.orderTodo = '';
    this.orderTodoTitle = '';
  }

  deleteTodo(index: number) {
    this.orderTodos.splice(index, 1);
    this.isEditOrder.splice(index, 1);
  }

  async saveOrder() {
    this.orderService.createOrder({
      id: -1,
      customerID: this.customer.id,
      firstName: this.customer.firstName,
      lastName: this.customer.lastName,
      email: this.customer.email,
      city: this.customer.city,
      street: this.customer.street,
      postalCode: this.customer.postalCode,
      callNumber: this.customer.callNumber,
      information: this.customer.information,
      company: localStorage.getItem('company'),

      orderInformation: this.orderInformation,
      refNr: this.refNr,
      createDate: this.createDate,
      startDate: this.startDate,
      endDate: this.endDate,
      furtherInformation: this.furtherInformation,
      todos: this.orderTodos,
      userId: localStorage.getItem('userId'),
      status: '0',
      password: ''
    })
      .subscribe(async (response) => {
        console.log(response);
        await this.modalController.dismiss();
        this.isLoading = false;
      }, async error => {
        this.isLoading = false;
        console.log(error);
        await this.modalController.dismiss();
      });
  }

}
