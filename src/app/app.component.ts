import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tip-calculator';
  billVal: number | null = null;
  peopleVal: number | null = null;
  tipVal: number = 0;
  tipAmountPerPerson: number = 0;
  totalPerPerson: number = 0;

  handleTip(tipValue: number) {
    this.tipVal = tipValue;
  }
  hasValues() {
    return this.billVal && this.peopleVal && this.tipVal;
  }

  onChangeBill(billValue: number) {
    this.billVal = billValue;
    this.calculate();
  }
  onChangePeople(peopleValue: number) {
    this.peopleVal = peopleValue;
    this.calculate();
  }

  reset() {
    this.billVal = 0;
    this.tipVal = 0;
    this.peopleVal = 0;
    this.tipAmountPerPerson = 0;
    this.totalPerPerson = 0;
  }

  calculate() {
    if (this.billVal && this.tipVal && this.peopleVal) {
      this.tipAmountPerPerson =
        ((this.tipVal / 100) * this.billVal) / this.peopleVal;
      this.totalPerPerson =
        this.tipAmountPerPerson + this.billVal / this.peopleVal;
    }
  }
}
