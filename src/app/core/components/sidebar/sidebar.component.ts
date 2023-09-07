import { Component } from '@angular/core';

@Component({
  selector: 'mm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  sidebarVisible: boolean = true;
}
