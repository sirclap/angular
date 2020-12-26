import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@core/auth/guard/auth.guard';
import { LayoutsModule } from '@layouts/layouts.module';
import { ScenesModule } from '@scenes/scenes.module';
import { AnonymousLayoutComponent } from '@layouts/anonymous-layout/anonymous-layout.component';
import { UserLayoutComponent } from '@layouts/user-layout/user-layout.component';
import { HomeSceneComponent } from '@scenes/home-scene/home-scene.component';
import { AboutSceneComponent } from '@scenes/about-scene/about-scene.component';
import { LoginSceneComponent } from '@scenes/login-scene/login-scene.component';
import { DashboardSceneComponent } from '@scenes/dashboard-scene/dashboard-scene.component';
import { GallerySceneComponent } from '@scenes/gallery-scene/gallery-scene.component';
import { CrudSceneComponent } from '@scenes/crud-scene/crud-scene.component';
import { ProfileSceneComponent } from '@scenes/profile-scene/profile-scene.component';

const routes: Routes = [
  {
    path: '',
    component: AnonymousLayoutComponent,
    children: [
      {
        path: '',
        component: HomeSceneComponent,
      },
      {
        path: 'about',
        component: AboutSceneComponent,
      },
      {
        path: 'login',
        component: LoginSceneComponent,
      },
    ],
  },
  {
    path: '',
    component: UserLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardSceneComponent,
      },
      {
        path: 'gallery',
        component: GallerySceneComponent,
      },
      {
        path: 'crud',
        component: CrudSceneComponent,
      },
      {
        path: 'profile',
        component: ProfileSceneComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LayoutsModule, ScenesModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
