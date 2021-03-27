import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionmasterComponent } from './transactionmaster.component';

describe('TransactionmasterComponent', () => {
  let component: TransactionmasterComponent;
  let fixture: ComponentFixture<TransactionmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionmasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
