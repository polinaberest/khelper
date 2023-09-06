import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/public/home/home.component';
import { LoginComponent } from './features/auth/login/login.component';
import { ContainerMapComponent } from './features/public/container-map/container-map.component';
import { RequestDetailsComponent } from './features/public/request-details/request-details.component';

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
  },
  {
    path:'request-details/:id',
    component: RequestDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
