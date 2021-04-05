import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsgstComponent } from './addsgst.component';

describe('AddsgstComponent', () => {
  let component: AddsgstComponent;
  let fixture: ComponentFixture<AddsgstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsgstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsgstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
