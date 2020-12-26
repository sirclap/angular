import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodsModule } from '@pods/pods.module';
import { HomeSceneComponent } from './home-scene/home-scene.component';
import { AboutSceneComponent } from './about-scene/about-scene.component';
import { LoginSceneComponent } from './login-scene/login-scene.component';
import { DashboardSceneComponent } from './dashboard-scene/dashboard-scene.component';
import { GallerySceneComponent } from './gallery-scene/gallery-scene.component';
import { CrudSceneComponent } from './crud-scene/crud-scene.component';
import { ProfileSceneComponent } from './profile-scene/profile-scene.component';

@NgModule({
  declarations: [HomeSceneComponent, AboutSceneComponent, LoginSceneComponent, DashboardSceneComponent, GallerySceneComponent, CrudSceneComponent, ProfileSceneComponent],
  imports: [CommonModule, PodsModule],
})
export class ScenesModule {}
