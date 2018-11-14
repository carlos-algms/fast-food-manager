import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Ingredient } from '../../ingredients/ingredient';

@Component({
  selector: 'app-total-pane',
  templateUrl: './total-pane.component.html',
  styleUrls: ['./total-pane.component.scss'],
})
export class TotalPaneComponent implements OnChanges {
  ingredientsSum = 0;
  discountsSum = 0;
  total = 0;

  @Input() ingredientsList: Ingredient[];

  ngOnChanges({ ingredientsList }: SimpleChanges) {
    if (!ingredientsList || !ingredientsList.currentValue) {
      return;
    }

    this.calculateValues(ingredientsList.currentValue);
  }

  calculateValues(ingredientsList: Ingredient[]) {
    this.ingredientsSum = Array.from(ingredientsList).reduce(this.ingredientsSumReducer, 0);
    this.total = this.ingredientsSum - this.discountsSum;
  }

  ingredientsSumReducer(total: number, ingredient: Ingredient) {
    return total + ingredient.total;
  }
}
