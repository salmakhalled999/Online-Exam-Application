import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticPanel } from './static-panel';

describe('StaticPanel', () => {
  let component: StaticPanel;
  let fixture: ComponentFixture<StaticPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(StaticPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
