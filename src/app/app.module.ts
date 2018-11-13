import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app-root/app.component';
import { IngredientsPaneComponent } from './ingredients/ingredients-pane/ingredients-pane.component';
import { IngredientsService } from './ingredients/ingredients.service';
import { RecipesPaneComponent } from './recipes/recipes-pane/recipes-pane.component';
import { RecipesService } from './recipes/recipes.service';

@NgModule({
  imports: [BrowserModule, CommonModule, HttpClientModule],
  declarations: [AppComponent, RecipesPaneComponent, IngredientsPaneComponent],
  providers: [IngredientsService, RecipesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
