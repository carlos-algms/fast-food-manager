import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { IngredientBase } from '../../ingredients/ingredient';
import { UtilsModule } from '../../utils/utils.module';
import { OrderPaneComponent } from './order-pane.component';

describe('OrderPaneComponent', () => {
  const ingredient: IngredientBase = {
    id: 2,
    name: 'test',
    value: 1.33,
    amount: 0,
  };
  let component: OrderPaneComponent;
  let fixture: ComponentFixture<OrderPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UtilsModule],
      declarations: [OrderPaneComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add ingredients', () => {
    const anotherIngredient = { ...ingredient, id: 3 };

    component.addIngredient(ingredient);
    component.addIngredient(anotherIngredient);

    expect(component.ingredientsMap.has(ingredient.id)).toBeTruthy();
    expect(component.ingredientsMap.has(anotherIngredient.id)).toBeTruthy();

    fixture.detectChanges();

    const items = fixture.debugElement.queryAll(By.css('.list-group-item'));
    expect(items.length).toEqual(2);
  });

  it('should increase ingredient amount when adding same ingredient', () => {
    component.addIngredient(ingredient);
    component.addIngredient(ingredient);

    fixture.detectChanges();

    const items = fixture.debugElement.queryAll(By.css('.list-group-item'));
    expect(items.length).toEqual(1);

    expect(component.ingredientsMap.get(ingredient.id).amount).toEqual(2);
  });

  it('should replace current ingredients with a new list', () => {
    const ingredients = [{ ...ingredient, id: 4 }, { ...ingredient, id: 5 }];

    component.addIngredient(ingredient);
    fixture.detectChanges();

    component.replaceIngredients(ingredients);
    fixture.detectChanges();

    expect(component.ingredientsList.length).toEqual(2);
    expect(component.ingredientsMap.has(2)).toBeFalsy();
    expect(component.ingredientsMap.has(4)).toBeTruthy();
    expect(component.ingredientsMap.has(5)).toBeTruthy();
  });

  it('should remove an item', () => {
    component.addIngredient(ingredient);
    fixture.detectChanges();

    const removeButton = fixture.debugElement.nativeElement.querySelector('.remove-item');
    removeButton.click();
    fixture.detectChanges();

    const items = fixture.debugElement.queryAll(By.css('.list-group-item'));
    expect(items.length).toEqual(0);
  });
});
