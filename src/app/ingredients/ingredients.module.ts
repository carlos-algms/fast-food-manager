import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IngredientsPaneComponent } from './ingredients-pane/ingredients-pane.component';
import { IngredientsService } from './ingredients.service';

@NgModule({
  imports: [CommonModule],
  providers: [IngredientsService],
  declarations: [IngredientsPaneComponent],
  exports: [IngredientsPaneComponent],
})
export class IngredientsModule {}
