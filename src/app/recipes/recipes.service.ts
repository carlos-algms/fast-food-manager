import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  readonly url = '/api/recipes';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Recipe[]>(this.url);
  }
}
