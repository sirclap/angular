import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudSceneComponent } from './crud-scene.component';

describe('CrudSceneComponent', () => {
  let component: CrudSceneComponent;
  let fixture: ComponentFixture<CrudSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudSceneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
