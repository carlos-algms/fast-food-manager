import { app } from '../../app';
import * as INGREDIENTS from './ingredients.json';

app.get('/api/ingredients', (req, res) => {
  res.json(INGREDIENTS);
});
