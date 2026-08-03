import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Charlemagne } from './charlemagne';

describe('Charlemagne', () => {
  let component: Charlemagne;
  let fixture: ComponentFixture<Charlemagne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Charlemagne],
    }).compileComponents();

    fixture = TestBed.createComponent(Charlemagne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
