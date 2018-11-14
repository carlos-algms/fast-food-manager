import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TotalPaneComponent } from './total-pane/total-pane.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TotalPaneComponent],
  exports: [TotalPaneComponent],
})
export class TotalModule {}
