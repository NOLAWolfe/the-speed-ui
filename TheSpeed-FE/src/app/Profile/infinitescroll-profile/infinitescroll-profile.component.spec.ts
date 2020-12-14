import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfinitescrollProfileComponent } from './infinitescroll-profile.component';

describe('InfinitescrollProfileComponent', () => {
  let component: InfinitescrollProfileComponent;
  let fixture: ComponentFixture<InfinitescrollProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfinitescrollProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfinitescrollProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
