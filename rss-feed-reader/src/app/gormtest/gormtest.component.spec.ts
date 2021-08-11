import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GormtestComponent } from './gormtest.component';

describe('GormtestComponent', () => {
  let component: GormtestComponent;
  let fixture: ComponentFixture<GormtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GormtestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GormtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
