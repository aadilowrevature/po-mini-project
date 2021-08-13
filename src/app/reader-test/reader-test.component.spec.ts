import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderTestComponent } from './reader-test.component';

describe('ReaderTestComponent', () => {
  let component: ReaderTestComponent;
  let fixture: ComponentFixture<ReaderTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaderTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
