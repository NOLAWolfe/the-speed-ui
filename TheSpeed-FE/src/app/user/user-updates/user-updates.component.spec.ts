import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserUpdatesComponent } from './user-updates.component';

describe('UserUpdatesComponent', () => {
  let component: UserUpdatesComponent;
  let fixture: ComponentFixture<UserUpdatesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
