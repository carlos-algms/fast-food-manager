import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UtilsModule } from '../utils/utils.module';
import { OrderPaneComponent } from './order-pane/order-pane.component';

@NgModule({
  imports: [CommonModule, UtilsModule],
  declarations: [OrderPaneComponent],
  exports: [OrderPaneComponent],
})
export class OrderModule {}
