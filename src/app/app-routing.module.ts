import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/public/home/home.component';
import { LoginComponent } from './features/auth/login/login.component';
import { ContainerMapComponent } from './features/public/container-map/container-map.component';
import { RequestDetailsComponent } from './features/public/request-details/request-details.component';
import { RequestsListComponent } from './features/elems/requestpost/requests-list/requests-list.component';
import { EditRequestComponent } from './features/elems/requestpost/edit-request/edit-request.component';

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
  },
  {
    path:'my-requests',
    component: RequestsListComponent
  },
  {
    path:'requests/:id',
    component: EditRequestComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
