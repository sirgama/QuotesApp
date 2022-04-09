import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesAreaComponent } from './quotes-area.component';

describe('QuotesAreaComponent', () => {
  let component: QuotesAreaComponent;
  let fixture: ComponentFixture<QuotesAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
