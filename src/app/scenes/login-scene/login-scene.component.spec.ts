import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSceneComponent } from './login-scene.component';

describe('LoginSceneComponent', () => {
  let component: LoginSceneComponent;
  let fixture: ComponentFixture<LoginSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSceneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
