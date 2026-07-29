import { TestBed } from '@angular/core/testing';

import { GestionSouvService } from './gestion-souv.service';

describe('GestionSouvService', () => {
  let service: GestionSouvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionSouvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
