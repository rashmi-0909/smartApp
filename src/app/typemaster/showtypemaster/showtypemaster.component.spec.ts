import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtypemasterComponent } from './showtypemaster.component';

describe('ShowtypemasterComponent', () => {
  let component: ShowtypemasterComponent;
  let fixture: ComponentFixture<ShowtypemasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowtypemasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtypemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
