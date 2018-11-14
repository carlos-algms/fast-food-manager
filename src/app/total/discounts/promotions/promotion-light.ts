import { PromotionsBase } from './promotions-base';
import { Ingredient } from '../../../ingredients/ingredient';

export class PromotionLight extends PromotionsBase {
  name = 'Light';
  description = 'O lanche tem alface e não tem bacon, ganha 10% de desconto';
  alfaceId = 1;
  baconId = 2;
  discountPercent = 0.1;

  calculate = (total: number) => total * this.discountPercent;

  isApplicable = (ingredientsList: Ingredient[]) => {
    const hasAlface = ingredientsList.some((ingredient) => ingredient.id === this.alfaceId);
    const hasBacon = ingredientsList.some((ingredient) => ingredient.id === this.baconId);
    return hasAlface && !hasBacon;
  };
}
