import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnonymousLayoutComponent } from './anonymous-layout/anonymous-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { PageContentComponent } from './page-content/page-content.component';
import { MenuPublicComponent } from './menu-public/menu-public.component';
import { MenuPrivateComponent } from './menu-private/menu-private.component';

@NgModule({
  declarations: [
    AnonymousLayoutComponent,
    UserLayoutComponent,
    PageContentComponent,
    MenuPublicComponent,
    MenuPrivateComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class LayoutsModule {}
