import { NgModule } from '@angular/core';
import { ApiService } from './services/api.service';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PrimeNgModule } from '../shared/primeng.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from '../shared/material.module';
import { CommonModule } from '@angular/common';
import { KPIComponent } from './components/kpi/kpi.component';

@NgModule({
  declarations: [ToolbarComponent, SidebarComponent, KPIComponent],
  imports: [PrimeNgModule, MaterialModule, CommonModule],
  providers: [ApiService],
  exports: [ToolbarComponent, SidebarComponent, KPIComponent],
})
export class CoreModule {}
