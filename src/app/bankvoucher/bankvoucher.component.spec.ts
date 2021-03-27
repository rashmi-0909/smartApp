import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankvoucherComponent } from './bankvoucher.component';

describe('BankvoucherComponent', () => {
  let component: BankvoucherComponent;
  let fixture: ComponentFixture<BankvoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankvoucherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankvoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
