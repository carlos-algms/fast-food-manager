import { Component } from '@angular/core';

import { Ingredient, IngredientBase } from '../../ingredients/ingredient';

@Component({
  selector: 'app-order-pane',
  templateUrl: './order-pane.component.html',
  styleUrls: ['./order-pane.component.scss'],
})
export class OrderPaneComponent {
  orderIngredients: Map<number, Ingredient> = new Map();
  ingredientsList: IterableIterator<Ingredient>;

  addIngredient = ({ id, name, value, amount = 0 }: IngredientBase) => {
    const existentIngredient = this.orderIngredients.get(id);
    const effectiveAmount = existentIngredient ? existentIngredient.amount : amount;
    const ingredient = new Ingredient(id, name, value, effectiveAmount + 1);

    this.orderIngredients.set(id, ingredient);
    this.ingredientsList = this.orderIngredients.values();
  };
}
