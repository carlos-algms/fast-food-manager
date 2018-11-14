import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { Ingredient } from '../../ingredients/ingredient';
import { Recipe } from '../recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-pane',
  templateUrl: './recipes-pane.component.html',
  styleUrls: ['./recipes-pane.component.scss'],
})
export class RecipesPaneComponent {
  recipes$: Observable<Recipe[]>;

  @Output() recipeClicked: EventEmitter<Ingredient[]> = new EventEmitter();

  constructor(private recipesService: RecipesService) {
    this.recipes$ = this.requestRecipes();
  }

  requestRecipes() {
    return this.recipesService.getAll();
  }

  handleRecipeClick($event: Event, recipe: Recipe) {
    $event.preventDefault();
    this.recipeClicked.emit(recipe.ingredientsList);
  }
}
