import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbillmasterComponent } from './addbillmaster.component';

describe('AddbillmasterComponent', () => {
  let component: AddbillmasterComponent;
  let fixture: ComponentFixture<AddbillmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbillmasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbillmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
