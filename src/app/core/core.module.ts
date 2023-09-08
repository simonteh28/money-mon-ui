import { NgModule } from '@angular/core';
import { ApiService } from './services/api.service';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PrimeNgModule } from '../shared/primeng.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from '../shared/material.module';
import { CommonModule } from '@angular/common';
import { KPIComponent } from './components/kpi/kpi.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [ToolbarComponent, SidebarComponent, KPIComponent, LayoutComponent],
  imports: [PrimeNgModule, MaterialModule, CommonModule, FlexLayoutModule],
  providers: [ApiService],
  exports: [ToolbarComponent, SidebarComponent, KPIComponent, LayoutComponent, FlexLayoutModule],
})
export class CoreModule {}
