import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Louis14 } from './louis14';

describe('Louis14', () => {
  let component: Louis14;
  let fixture: ComponentFixture<Louis14>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Louis14],
    }).compileComponents();

    fixture = TestBed.createComponent(Louis14);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
