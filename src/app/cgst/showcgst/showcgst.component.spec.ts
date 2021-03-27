import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcgstComponent } from './showcgst.component';

describe('ShowcgstComponent', () => {
  let component: ShowcgstComponent;
  let fixture: ComponentFixture<ShowcgstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcgstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcgstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
