import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrimeNgModule } from '../shared/primeng.module';
import { CoreModule } from '../core/core.module';
import { FeatureRoutingModule } from './feature-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [PrimeNgModule, CoreModule, FeatureRoutingModule],
})
export class FeatureModule {}
