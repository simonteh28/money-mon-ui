import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SidebarComponent } from 'src/app/core/components/sidebar/sidebar.component';

@Component({
  selector: 'mm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  @ViewChild(SidebarComponent) _sidebar: SidebarComponent | undefined;

  closeSidebar() {
    if (this._sidebar) {
      this._sidebar.closeSidebar();
    }
  }
}
