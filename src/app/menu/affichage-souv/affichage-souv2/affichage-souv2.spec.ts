import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageSouv2 } from './affichage-souv2';

describe('AffichageSouv2', () => {
  let component: AffichageSouv2;
  let fixture: ComponentFixture<AffichageSouv2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffichageSouv2],
    }).compileComponents();

    fixture = TestBed.createComponent(AffichageSouv2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
