import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Ingredient } from '../ingredient';
import { IngredientsService } from '../ingredients.service';

@Component({
  selector: 'app-ingredients-pane',
  templateUrl: './ingredients-pane.component.html',
  styleUrls: ['./ingredients-pane.component.scss'],
})
export class IngredientsPaneComponent {
  ingredients$: Observable<Ingredient[]>;

  constructor(private ingredientsService: IngredientsService) {
    this.ingredients$ = this.requestIngredients();
  }

  requestIngredients() {
    return this.ingredientsService.getAll();
  }
}
