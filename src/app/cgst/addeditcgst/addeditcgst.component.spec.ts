import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditcgstComponent } from './addeditcgst.component';

describe('AddeditcgstComponent', () => {
  let component: AddeditcgstComponent;
  let fixture: ComponentFixture<AddeditcgstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditcgstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditcgstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
