import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-row',
  templateUrl: './info-row.component.html',
  styleUrls: ['./info-row.component.scss'],
})
export class InfoRowComponent {
  @Input() label = '';
  @Input() labelSuffix = '';
  @Input() valueUnit = '';
  @Input() value: number= 0;
}
