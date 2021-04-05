import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddigstComponent } from './addigst.component';

describe('AddigstComponent', () => {
  let component: AddigstComponent;
  let fixture: ComponentFixture<AddigstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddigstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddigstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
