import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/public/home/home.component';
import { LoginComponent } from './features/auth/login/login.component';
import { ContainerMapComponent } from './features/public/container-map/container-map.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'container-map',
    component: ContainerMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
