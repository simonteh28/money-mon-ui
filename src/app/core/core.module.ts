import { NgModule } from '@angular/core';
import { ApiService } from './services/api.service';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PrimeNgModule } from '../shared/primeng.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [ToolbarComponent, SidebarComponent],
  imports: [PrimeNgModule],
  providers: [ApiService],
  exports: [ToolbarComponent, SidebarComponent],
})
export class CoreModule {}
