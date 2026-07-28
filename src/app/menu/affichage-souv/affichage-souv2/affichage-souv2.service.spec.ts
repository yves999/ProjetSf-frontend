import { TestBed } from '@angular/core/testing';

import { AffichageSouv2Service } from './affichage-souv2.service';

describe('AffichageSouv2Service', () => {
  let service: AffichageSouv2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffichageSouv2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
