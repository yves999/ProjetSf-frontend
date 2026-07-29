import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSouv } from './gestion-souv';

describe('GestionSouv', () => {
  let component: GestionSouv;
  let fixture: ComponentFixture<GestionSouv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionSouv],
    }).compileComponents();

    fixture = TestBed.createComponent(GestionSouv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
