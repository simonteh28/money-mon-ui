import { Component, Input } from '@angular/core';

@Component({
  selector: 'mm-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.scss'],
})
export class KPIComponent {
  @Input()
  label?: string;

  @Input()
  imgSrc?: string;

  imgWidth: number | undefined;

  @Input()
  set width(width: string){
    this.imgWidth = +width;
  }
}
