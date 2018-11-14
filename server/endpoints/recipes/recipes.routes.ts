import { app } from '../../app';
import * as INGREDIENTS from '../ingredients/ingredients.json';
import * as RECIPES from './recipes.json';

RECIPES.forEach((recipe: any) => {
  recipe.ingredientsList = recipe.ingredientsIds
    .map((id: number) => INGREDIENTS.find((ingredient) => ingredient.id === id))
    .map((ingredient: any) => ({ ...ingredient, amount: 1 }));
});

app.get('/api/recipes', (req, res) => {
  res.json(RECIPES);
});
