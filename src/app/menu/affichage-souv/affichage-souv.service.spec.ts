import { TestBed } from '@angular/core/testing';

import { AffichageSouvService } from './affichage-souv.service';

describe('AffichageSouvService', () => {
  let service: AffichageSouvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffichageSouvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
