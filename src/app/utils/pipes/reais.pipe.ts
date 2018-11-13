import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'reais' })
export class ReaisPipe implements PipeTransform {
  constructor(private currency: CurrencyPipe) {}

  transform(value = 0): string {
    return this.currency.transform(value, 'BRL', 'symbol', '1.2-2', 'pt-BR');
  }
}
