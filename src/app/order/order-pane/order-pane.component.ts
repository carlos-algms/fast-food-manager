import { Component } from '@angular/core';

import { Ingredient, IngredientBase } from '../../ingredients/ingredient';

@Component({
  selector: 'app-order-pane',
  templateUrl: './order-pane.component.html',
  styleUrls: ['./order-pane.component.scss'],
})
export class OrderPaneComponent {
  ingredientsMap: Map<number, Ingredient> = new Map();
  ingredientsList: Ingredient[];

  addIngredient = ({ id, name, value, amount = 0 }: IngredientBase) => {
    const existentIngredient = this.ingredientsMap.get(id);
    const effectiveAmount = existentIngredient ? existentIngredient.amount : amount;
    const ingredient = new Ingredient(id, name, value, effectiveAmount + 1);

    this.ingredientsMap.set(id, ingredient);
    this.ingredientsList = Array.from(this.ingredientsMap.values());
  };

  replaceIngredients = (ingredientsList: IngredientBase[]) => {
    const ingredientsMap = new Map<number, Ingredient>();
    for (const { id, name, value, amount } of ingredientsList) {
      ingredientsMap.set(id, new Ingredient(id, name, value, amount));
    }

    this.ingredientsMap = ingredientsMap;
    this.ingredientsList = Array.from(ingredientsMap.values());
  };
}
