import { TestBed } from '@angular/core/testing';

import { DiscountsManagerService } from './discounts-manager.service';
import { PromotionLotsOfCheese } from './promotions/promotion-lots-of-cheese';

describe('DiscountsManagerService', () => {
  let service: DiscountsManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(DiscountsManagerService);
  });

  it('should return a list of applicable promotions', () => {
    let ingredients: any[] = [];
    let promotions = service.getApplicablePromotions(ingredients);

    expect(promotions).toEqual([]);

    const promotionLotsOfCheese = new PromotionLotsOfCheese();
    ingredients = [{ id: promotionLotsOfCheese.ingredientId, name: 'cheese', amount: 3, value: 1 }];
    promotions = service.getApplicablePromotions(ingredients);

    expect(promotions.length).toBe(1);
    expect(promotions[0] instanceof PromotionLotsOfCheese).toBeTruthy();
  });
});
