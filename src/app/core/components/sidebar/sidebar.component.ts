import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'mm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ width: 0, opacity: 0 }),
            animate('0.5s ease-out', 
                    style({ width: '15rem', opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ width: '15rem', opacity: 1 }),
            animate('0.5s ease-in', 
                    style({ width: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class SidebarComponent implements OnInit {
  openPanel: boolean = false;
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        {
            icon: 'pi pi-folder-open',
        },
        {
            icon: 'pi pi-sort-alt'
        },
        {
          icon: 'pi pi-cog'
      }
    ];
}

  openSidebar(){
    this.openPanel = !this.openPanel;
  }
}

