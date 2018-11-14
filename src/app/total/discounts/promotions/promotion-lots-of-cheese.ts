import { PromotionsBase } from './promotions-base';
import { Ingredient } from '../../../ingredients/ingredient';

export class PromotionLotsOfCheese extends PromotionsBase {
  name = 'Muito Queijo';
  description = 'A cada 3 porções de queijo o cliente só paga 2';
  ingredientId = 5;
  discountDivisor = 3;

  calculate = (total: number, ingredientsList: Ingredient[]) => {
    const ingredient = ingredientsList.find(this.ingredientFinder);
    const freeAmount = Math.floor(ingredient.amount / 3);
    return freeAmount * ingredient.value;
  };

  isApplicable = (ingredientsList: Ingredient[]) => {
    const ingredient = ingredientsList.find(this.ingredientFinder);
    return ingredient && ingredient.amount >= 3;
  };

  private ingredientFinder = (ingredient) => ingredient.id === this.ingredientId;
}
