import './endpoints/ingredients/ingredients.routes';
import './endpoints/recipes/recipes.routes';

import { app } from './app';

const NOT_FOUND_STATUS_CODE = 404;

app.get('*', (req, res) => {
  res
    .status(NOT_FOUND_STATUS_CODE)
    .send('');
});
