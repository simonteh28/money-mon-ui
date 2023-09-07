import { NgModule } from '@angular/core';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  imports: [ToolbarModule, ButtonModule, SplitButtonModule, SidebarModule],
  exports: [ToolbarModule, ButtonModule, SplitButtonModule, SidebarModule],
})
export class PrimeNgModule {}
