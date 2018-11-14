import { Injectable } from '@angular/core';
import { PromotionsBase } from './promotions/promotions-base';
import { PromotionLight } from './promotions/promotion-light';
import { PromotionLotsOfCheese } from './promotions/promotion-lots-of-cheese';
import { PromotionLotsOfMeat } from './promotions/promotion-lots-of-meat';
import { Ingredient } from '../../ingredients/ingredient';

@Injectable({
  providedIn: 'root',
})
export class DiscountsManagerService {
  enabledPromotions: PromotionsBase[] = [new PromotionLight(), new PromotionLotsOfCheese(), new PromotionLotsOfMeat()];

  getApplicablePromotions(ingredientsList: Ingredient[]) {
    return this.enabledPromotions.filter((promotion) => promotion.isApplicable(ingredientsList));
  }
}
