import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrimeNgModule } from '../shared/primeng.module';
import { CoreModule } from '../core/core.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [PrimeNgModule, CoreModule, FeaturesRoutingModule, MaterialModule],
})
export class FeaturesModule {}
