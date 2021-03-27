import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillmasterComponent } from './billmaster.component';

describe('BillmasterComponent', () => {
  let component: BillmasterComponent;
  let fixture: ComponentFixture<BillmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillmasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
