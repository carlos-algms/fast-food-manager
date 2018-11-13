import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';

import ingredientsJson from '../../../server/endpoints/ingredients/ingredients.json';
import { RecipesService } from './recipes.service';

describe('RecipesService', () => {
  let httpMock: HttpTestingController;
  let service: RecipesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RecipesService],
    });
    httpMock = TestBed.get(HttpTestingController);
  }));

  afterEach(() => {
    httpMock.verify();
    httpMock = null;
    service = null;
  });

  it('should request data and return an array', () => {
    service = TestBed.get(RecipesService);
    service.getAll().subscribe((res) => {
      expect(res.length).toBeGreaterThan(1);
      expect(res.length).toEqual(ingredientsJson.length);
    });

    const req = httpMock.expectOne(service.url);
    req.flush(ingredientsJson);
  });
});
