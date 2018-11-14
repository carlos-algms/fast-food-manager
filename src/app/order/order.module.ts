import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OrderPaneComponent } from './order-pane/order-pane.component';

@NgModule({
  imports: [CommonModule],
  declarations: [OrderPaneComponent],
  exports: [OrderPaneComponent],
})
export class OrderModule {}
