import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: number | null = null;
  @Input() active: boolean = false;
  @Output() clicked = new EventEmitter();

  onClick(): void {
    this.clicked.emit();
  }
}
