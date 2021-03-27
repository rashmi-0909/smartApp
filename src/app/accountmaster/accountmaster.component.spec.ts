import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountmasterComponent } from './accountmaster.component';

describe('AccountmasterComponent', () => {
  let component: AccountmasterComponent;
  let fixture: ComponentFixture<AccountmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountmasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
