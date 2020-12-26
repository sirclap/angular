import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSceneComponent } from './profile-scene.component';

describe('ProfileSceneComponent', () => {
  let component: ProfileSceneComponent;
  let fixture: ComponentFixture<ProfileSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSceneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
