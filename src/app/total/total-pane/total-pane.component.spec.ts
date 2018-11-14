import { SimpleChange } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ingredient } from '../../ingredients/ingredient';
import { UtilsModule } from '../../utils/utils.module';
import { TotalPaneComponent } from './total-pane.component';

describe('TotalPaneComponent', () => {
  let component: TotalPaneComponent;
  let fixture: ComponentFixture<TotalPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UtilsModule],
      declarations: [TotalPaneComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should sum ingredients value', () => {
    const ingredientsList = [new Ingredient(1, 'test', 2, 5), new Ingredient(2, 'test', 3, 3)];
    const expectedTotal = ingredientsList.reduce((total, ingredient) => total + ingredient.total, 0);

    component.ngOnChanges({
      ingredientsList: new SimpleChange(null, ingredientsList, true),
    });
    fixture.detectChanges();

    expect(component.ingredientsSum).toEqual(expectedTotal);
  });
});
