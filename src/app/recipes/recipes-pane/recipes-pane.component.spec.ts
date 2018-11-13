import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import recipesJson from '../../../../server/endpoints/recipes/recipes.json';
import { RecipesService } from '../recipes.service.js';
import { RecipesPaneComponent } from './recipes-pane.component';
import { HttpClientModule } from '@angular/common/http';

describe('RecipesPaneComponent', () => {
  let component: RecipesPaneComponent;
  let fixture: ComponentFixture<RecipesPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [RecipesPaneComponent],
      providers: [RecipesService],
    }).compileComponents();
  }));

  beforeEach(() => {
    spyOn(RecipesPaneComponent.prototype, 'requestRecipes').and.callFake(() => of(recipesJson));
  });

  it('should create', () => {
    fixture = TestBed.createComponent(RecipesPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
    const items = fixture.debugElement.queryAll(By.css('a'));
    expect(items.length).toEqual(recipesJson.length);
  });
});
