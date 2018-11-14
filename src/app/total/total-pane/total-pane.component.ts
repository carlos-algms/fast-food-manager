import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Ingredient } from '../../ingredients/ingredient';
import { PromotionsBase } from '../discounts/promotions/promotions-base';
import { DiscountsManagerService } from '../discounts/discounts-manager.service';

export interface Discount {
  name: string;
  description: string;
  value: number;
}

@Component({
  selector: 'app-total-pane',
  templateUrl: './total-pane.component.html',
  styleUrls: ['./total-pane.component.scss'],
})
export class TotalPaneComponent implements OnChanges {
  ingredientsSum = 0;
  discountsSum = 0;
  total = 0;
  discounts: Discount[] = [];

  @Input() ingredientsList: Ingredient[];

  constructor(private discountsManager: DiscountsManagerService) {}

  ngOnChanges({ ingredientsList }: SimpleChanges) {
    if (!ingredientsList || !ingredientsList.currentValue) {
      return;
    }

    this.calculateValues(ingredientsList.currentValue);
  }

  private calculateValues(ingredientsList: Ingredient[]) {
    this.ingredientsSum = ingredientsList.reduce(this.ingredientsSumReducer, 0);
    this.discountsSum = this.calculateDiscounts(ingredientsList);
    this.total = this.ingredientsSum - this.discountsSum;
  }

  private ingredientsSumReducer(total: number, ingredient: Ingredient) {
    return total + ingredient.total;
  }

  private calculateDiscounts(ingredientsList: Ingredient[]): number {
    const promotions: PromotionsBase[] = this.discountsManager.getApplicablePromotions(ingredientsList);
    this.discounts = promotions.map(discountsMapper, this);
    const sum = this.discounts.reduce(this.discountsSumReducer, 0);

    return sum;

    function discountsMapper(this: TotalPaneComponent, { name, description, calculate }: PromotionsBase) {
      return {
        name,
        description,
        value: calculate(this.ingredientsSum, ingredientsList),
      };
    }
  }

  private discountsSumReducer(total: number, { value }: Discount): number {
    return total + value;
  }
}
