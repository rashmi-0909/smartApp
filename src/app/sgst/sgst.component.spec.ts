import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgstComponent } from './sgst.component';

describe('SgstComponent', () => {
  let component: SgstComponent;
  let fixture: ComponentFixture<SgstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SgstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
