import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturesPostsComponent } from './pictures-posts.component';

describe('PicturesPostsComponent', () => {
  let component: PicturesPostsComponent;
  let fixture: ComponentFixture<PicturesPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicturesPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicturesPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
