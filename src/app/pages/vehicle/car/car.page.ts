import {Component} from '@angular/core';

@Component({
    selector: 'app-car',
    templateUrl: './car.page.html',
    styleUrls: ['./car.page.scss'],
})
export class CarPage {

    mode = 'create';
    constructor() {
    }

    changeMode(mode: string) {
        this.mode = mode;
    }

}
