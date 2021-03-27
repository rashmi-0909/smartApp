import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsgstComponent } from './showsgst.component';

describe('ShowsgstComponent', () => {
  let component: ShowsgstComponent;
  let fixture: ComponentFixture<ShowsgstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsgstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsgstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
