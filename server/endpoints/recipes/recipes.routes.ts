import { app } from '../../app';
import * as RECIPES from './recipes.json';

app.get('/api/recipes', (req, res) => {
  res.json(RECIPES);
});
