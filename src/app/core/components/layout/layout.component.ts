import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from 'src/app/core/components/sidebar/sidebar.component';

@Component({
  selector: 'mm-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent  {
  @ViewChild(SidebarComponent) _sidebar: SidebarComponent | undefined;

  closeSidebar() {
    if (this._sidebar) {
      this._sidebar.closeSidebar();
    }
  }
}
