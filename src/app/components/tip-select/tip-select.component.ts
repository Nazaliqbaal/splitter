import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-tip-select',
  templateUrl: './tip-select.component.html',
  styleUrls: ['./tip-select.component.scss'],
})
export class TipSelectComponent {
  @Input() label: string | null = null;
  // @Input() tipValue = 0;
  @Output() onTipChange: EventEmitter<number> = new EventEmitter();

  private _tipValue: number = 0;

  @Input()
  set tipValue(value: number) {
    console.log(value);
    this.customTipValue = value;
    this._tipValue = value;
  }

  get tipValue(): number {
    return this._tipValue;
  }

  customTipValue: number = 0;
  tips = [
    {
      value: 5,
    },
    {
      value: 10,
    },
    {
      value: 15,
    },
    {
      value: 20,
    },
    {
      value: 25,
    },
  ];

  // ngOnChanges(changes: any) {
  //   console.log(changes);
  //   if (changes.tipValue) {
  //     this.customTipValue = changes.tipValue.currentValue;
  //   }
  // }

  handleValuetip(tip: number) {
    this.onTipChange.emit(tip);
  }
  onChange() {
    console.log(this.customTipValue);
    this.onTipChange.emit(this.customTipValue);
  }
}

