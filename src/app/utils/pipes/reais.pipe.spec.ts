import { CurrencyPipe, registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';
import { async, inject, TestBed } from '@angular/core/testing';

import { ReaisPipe } from './reais.pipe';

registerLocaleData(pt);

describe('Display Reais pipe', () => {
  let pipe: ReaisPipe;
  const value = 135.72;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyPipe, ReaisPipe, { provide: LOCALE_ID, useValue: 'pt-BR' }],
    }).compileComponents();
  }));

  beforeEach(inject([ReaisPipe], (injectedPipe: ReaisPipe) => {
    pipe = injectedPipe;
  }));

  it('Should display currency icon and coma as separator', () => {
    const reais = pipe.transform(value);
    expect(reais.startsWith('R$')).toBeTruthy();
    expect(reais.endsWith('135,72')).toBeTruthy();
  });
});
