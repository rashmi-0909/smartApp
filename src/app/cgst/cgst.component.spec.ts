import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgstComponent } from './cgst.component';

describe('CgstComponent', () => {
  let component: CgstComponent;
  let fixture: ComponentFixture<CgstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CgstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
