import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UtilsModule } from '../utils/utils.module';
import { TotalPaneComponent } from './total-pane/total-pane.component';

@NgModule({
  imports: [CommonModule, UtilsModule],
  declarations: [TotalPaneComponent],
  exports: [TotalPaneComponent],
})
export class TotalModule {}
