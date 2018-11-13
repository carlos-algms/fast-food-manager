import { Ingredient } from '../ingredients/ingredient';

export interface Recipe {
  id: number;
  name: string;
  ingredientsIds: number[];
  ingredientsList?: Ingredient[];
}
