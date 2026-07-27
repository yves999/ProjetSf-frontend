import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageSouv } from './affichage-souv';

describe('AffichageSouv', () => {
  let component: AffichageSouv;
  let fixture: ComponentFixture<AffichageSouv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffichageSouv],
    }).compileComponents();

    fixture = TestBed.createComponent(AffichageSouv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
