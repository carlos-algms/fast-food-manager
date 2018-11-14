import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UtilsModule } from '../utils/utils.module';
import { IngredientsPaneComponent } from './ingredients-pane/ingredients-pane.component';
import { IngredientsService } from './ingredients.service';

@NgModule({
  imports: [CommonModule, UtilsModule],
  providers: [IngredientsService],
  declarations: [IngredientsPaneComponent],
  exports: [IngredientsPaneComponent],
})
export class IngredientsModule {}
