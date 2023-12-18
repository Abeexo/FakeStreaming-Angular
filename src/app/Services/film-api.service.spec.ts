import { TestBed } from '@angular/core/testing';
import { FilmAPIService } from './film-api.service';

describe('FilmAPIService', () => {
  let service: FilmAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
