import { CurrencyPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import ingredientsJson from '../../../../server/endpoints/ingredients/ingredients.json';
import { ReaisPipe } from '../../utils/pipes/reais.pipe.js';
import { IngredientsService } from '../ingredients.service';
import { IngredientsPaneComponent } from './ingredients-pane.component';

describe('IngredientsPaneComponent', () => {
  let component: IngredientsPaneComponent;
  let fixture: ComponentFixture<IngredientsPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [IngredientsPaneComponent, ReaisPipe],
      providers: [IngredientsService, CurrencyPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    spyOn(IngredientsPaneComponent.prototype, 'requestIngredients').and.callFake(() => of(ingredientsJson));
  });

  it('should render all available ingredients', () => {
    createComponent();

    expect(component).toBeTruthy();
    const items = fixture.debugElement.queryAll(By.css('a'));
    expect(items.length).toEqual(ingredientsJson.length);
  });

  it('should emit when click on an ingredient', () => {
    createComponent();
    const emitSpy = spyOn(component.ingredientClick$, 'emit');
    const clickSpy = spyOn(component, 'handleIngredientClick').and.callThrough();

    const firstItem = fixture.debugElement.nativeElement.querySelector('a');
    firstItem.click();

    expect(emitSpy).toHaveBeenCalled();
    expect(clickSpy).toHaveBeenCalled();
  });

  function createComponent() {
    fixture = TestBed.createComponent(IngredientsPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }
});
