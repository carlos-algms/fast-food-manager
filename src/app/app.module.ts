import { CommonModule, CurrencyPipe, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import pt from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app-root/app.component';
import { IngredientsPaneComponent } from './ingredients/ingredients-pane/ingredients-pane.component';
import { IngredientsService } from './ingredients/ingredients.service';
import { RecipesPaneComponent } from './recipes/recipes-pane/recipes-pane.component';
import { RecipesService } from './recipes/recipes.service';
import { ReaisPipe } from './utils/pipes/reais.pipe';

registerLocaleData(pt, 'pt-BR');

@NgModule({
  imports: [BrowserModule, CommonModule, HttpClientModule],
  declarations: [AppComponent, RecipesPaneComponent, IngredientsPaneComponent, ReaisPipe],
  providers: [IngredientsService, RecipesService, CurrencyPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
