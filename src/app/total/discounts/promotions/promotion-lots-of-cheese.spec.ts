import { Ingredient } from '../../../ingredients/ingredient';
import { PromotionLotsOfCheese } from './promotion-lots-of-cheese';

describe('promotion-lots-of-cheese', () => {
  let promotion: PromotionLotsOfCheese;

  beforeEach(() => {
    promotion = new PromotionLotsOfCheese();
  });

  it('should validate if it is isApplicable', () => {
    let ingredients: Ingredient[] = generateIngredients(1);

    expect(promotion.isApplicable(ingredients)).toBeFalsy();

    ingredients = generateIngredients(5);
    expect(promotion.isApplicable(ingredients)).toBeTruthy();
  });

  it('should calculate the discount value, 5 only pay 3', () => {
    // tslint:disable-next-line:no-magic-numbers
    for (const amount of [3, 5, 6, 7]) {
      const ingredients: Ingredient[] = generateIngredients(amount);
      const discountValue = Math.floor(amount / promotion.discountDivisor) * 1;
      expect(promotion.calculate(0, ingredients)).toEqual(discountValue);
    }
  });

  function generateIngredients(amount = 1) {
    return [new Ingredient(promotion.ingredientId, 'Cheese', 1, amount)];
  }
});
