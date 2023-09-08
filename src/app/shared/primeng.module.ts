import { NgModule } from '@angular/core';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SidebarModule } from 'primeng/sidebar';
import { DividerModule } from 'primeng/divider';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';

@NgModule({
  imports: [
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    SidebarModule,
    DividerModule,
    MenuModule,
    CardModule,
    ChipModule,
  ],
  exports: [
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    SidebarModule,
    DividerModule,
    MenuModule,
    CardModule,
    ChipModule,
  ],
})
export class PrimeNgModule {}
