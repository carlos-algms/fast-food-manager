import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RecipesPaneComponent } from './recipes-pane/recipes-pane.component';
import { RecipesService } from './recipes.service';

@NgModule({
  imports: [CommonModule],
  declarations: [RecipesPaneComponent],
  exports: [RecipesPaneComponent],
  providers: [RecipesService],
})
export class RecipesModule {}
