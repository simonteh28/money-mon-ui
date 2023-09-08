import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { mmMenuItem } from '../../interfaces/mm-menu-item';

@Component({
  selector: 'mm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ width: 0, opacity: 0 }),
        animate('0.5s ease-out', style({ width: '15rem', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ width: '15rem', opacity: 1 }),
        animate('0.5s ease-in', style({ width: 0, opacity: 0 })),
      ]),
    ]),
  ],
})
export class SidebarComponent implements OnInit {
  openPanel: boolean = false;
  items: mmMenuItem[] | undefined;
  selectedItem: mmMenuItem | undefined;

  ngOnInit() {
    this.items = [
      {
        title: 'Features',
        icon: 'pi pi-folder-open',
        subMenu: [{ title: 'Dashboard', icon: 'pi pi-chart-line' }],
      },
      {
        title: 'Transactions',
        icon: 'pi pi-sort-alt',
      },
      {
        title: 'Settings',
        icon: 'pi pi-cog',
      },
    ];
  }

  openSidebar(item: mmMenuItem) {
    if (!this.selectedItem) {
      this.openPanel = true;
      this.selectedItem = item;
    } else if (this.selectedItem != item) {
      this.selectedItem = item;
    } else {
      this.closeSidebar();
    }
  }

  closeSidebar() {
    this.openPanel = false;
    this.selectedItem = undefined;
  }
}
