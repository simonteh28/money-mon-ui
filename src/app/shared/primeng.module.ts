import { NgModule } from '@angular/core';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SidebarModule } from 'primeng/sidebar';
import { DividerModule } from 'primeng/divider';
import { MenuModule } from 'primeng/menu';


@NgModule({
  imports: [ToolbarModule, ButtonModule, SplitButtonModule, SidebarModule, DividerModule, MenuModule],
  exports: [ToolbarModule, ButtonModule, SplitButtonModule, SidebarModule, DividerModule, MenuModule],
})
export class PrimeNgModule {}
