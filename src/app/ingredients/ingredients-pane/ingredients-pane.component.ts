import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output() ingredientClick$: EventEmitter<Ingredient> = new EventEmitter();

  constructor(private ingredientsService: IngredientsService) {
    this.ingredients$ = this.requestIngredients();
  }

  requestIngredients() {
    return this.ingredientsService.getAll();
  }

  handleIngredientClick($event: MouseEvent, ingredient: Ingredient) {
    $event.preventDefault();
    this.ingredientClick$.emit(ingredient);
  }
}
