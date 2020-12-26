import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './home/home-container/home-container.component';
import { LoginContainerComponent } from './login/login-container/login-container.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeContainerComponent,
    LoginContainerComponent,
    LoginFormComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [HomeContainerComponent, LoginContainerComponent],
})
export class PodsModule {}
