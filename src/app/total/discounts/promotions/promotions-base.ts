import { Ingredient } from '../../../ingredients/ingredient';

export abstract class PromotionsBase {
  abstract name: string;
  abstract description: string;

  abstract calculate(total: number, ingredientsList?: Ingredient[]);
  abstract isApplicable(ingredientsList: Ingredient[]);
}
