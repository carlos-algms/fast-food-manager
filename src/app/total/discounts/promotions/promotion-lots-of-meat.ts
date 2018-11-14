import { PromotionsBase } from './promotions-base';
import { Ingredient } from '../../../ingredients/ingredient';

export class PromotionLotsOfMeat extends PromotionsBase {
  name = 'Muita Carne';
  description = 'A cada 3 porções de carne o cliente só paga 2';
  hamburgerId = 3;
  discountDivisor = 3;

  calculate = (total: number, ingredientsList: Ingredient[]) => {
    const hamburger = ingredientsList.find(this.ingredientFinder);
    const freeAmount = Math.floor(hamburger.amount / 3);
    return freeAmount * hamburger.value;
  };

  isApplicable = (ingredientsList: Ingredient[]) => {
    const hamburger = ingredientsList.find(this.ingredientFinder);
    return hamburger && hamburger.amount >= 3;
  };

  private ingredientFinder = (ingredient) => ingredient.id === this.hamburgerId;
}
