import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtypemasterComponent } from './addtypemaster.component';

describe('AddtypemasterComponent', () => {
  let component: AddtypemasterComponent;
  let fixture: ComponentFixture<AddtypemasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtypemasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtypemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
