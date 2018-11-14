import { PromotionLight } from './promotion-light';
import { Ingredient } from '../../../ingredients/ingredient';

describe('PromotionLight', () => {
  let promotion: PromotionLight;

  beforeEach(() => {
    promotion = new PromotionLight();
  });

  it('should validate if it is isApplicable', () => {
    const ingredients: Ingredient[] = [new Ingredient(5, 'test', 0, 0)];

    expect(promotion.isApplicable(ingredients)).toBeFalsy();

    ingredients.push(new Ingredient(promotion.alfaceId, 'alface', 1, 2));
    expect(promotion.isApplicable(ingredients)).toBeTruthy();

    ingredients.push(new Ingredient(promotion.baconId, 'bacon', 1, 2));
    expect(promotion.isApplicable(ingredients)).toBeFalsy();
  });

  it('should calculate the discoutn value', () => {
    const discountValue = 2 * promotion.discountPercent;
    expect(promotion.calculate(2)).toEqual(discountValue);
  });
});
