import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ReaisPipe } from './pipes/reais.pipe';

@NgModule({
  imports: [CommonModule],
  providers: [CurrencyPipe, ReaisPipe],
  declarations: [ReaisPipe],
  exports: [ReaisPipe],
})
export class UtilsModule {}
