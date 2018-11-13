import { TestBed, async } from '@angular/core/testing';

import { IngredientsService } from './ingredients.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import ingredientsJson from '../../../server/endpoints/ingredients/ingredients.json';

describe('IngredientsService', () => {
  let httpMock: HttpTestingController;
  let service: IngredientsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [IngredientsService],
    });
    httpMock = TestBed.get(HttpTestingController);
  }));

  afterEach(() => {
    httpMock.verify();
    httpMock = null;
    service = null;
  });

  it('should request data and return an array', () => {
    service = TestBed.get(IngredientsService);
    service.getAll().subscribe((res) => {
      expect(res.length).toBeGreaterThan(1);
      expect(res.length).toEqual(ingredientsJson.length);
    });

    const req = httpMock.expectOne(service.url);
    req.flush(ingredientsJson);
  });
});
