import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { Recipe } from '../recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-pane',
  templateUrl: './recipes-pane.component.html',
  styleUrls: ['./recipes-pane.component.scss'],
})
export class RecipesPaneComponent {
  recipes$: Observable<Recipe[]>;

  @Output() recipeClick$: EventEmitter<Recipe> = new EventEmitter();

  constructor(private recipesService: RecipesService) {
    this.recipes$ = this.requestRecipes();
  }

  requestRecipes() {
    return this.recipesService.getAll();
  }

  handleRecipeClick($event: Event, recipe) {
    $event.preventDefault();
    this.recipeClick$.emit(recipe);
  }
}
