import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Ingredient } from './ingredient';

@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
  readonly url = '/api/ingredients';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Ingredient[]>(this.url);
  }
}
