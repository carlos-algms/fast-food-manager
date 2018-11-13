import { Component } from '@angular/core';
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

  constructor(private recipesService: RecipesService) {
    this.recipes$ = this.requestRecipes();
  }

  requestRecipes() {
    return this.recipesService.getAll();
  }
}
