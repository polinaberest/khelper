import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HomeComponent } from './features/public/home/home.component';
import { PostSummaryComponent } from './features/public/post-summary/post-summary.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './features/auth/login/login.component';
import { ContainerMapComponent } from './features/public/container-map/container-map.component';
import { GoogleMapsModule } from '@angular/google-maps'
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { RequestDetailsComponent } from './features/public/request-details/request-details.component';
import { FormatTextPipe } from './format-text.pipe';
import { RequestsListComponent } from './features/elems/requestpost/requests-list/requests-list.component';
import { EditRequestComponent } from './features/elems/requestpost/edit-request/edit-request.component';
import { ImageModule } from 'primeng/image';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageUploaderComponent } from './features/elems/requestpost/image-uploader/image-uploader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PostSummaryComponent,
    FooterComponent,
    LoginComponent,
    ContainerMapComponent,
    RequestDetailsComponent,
    FormatTextPipe,
    RequestsListComponent,
    EditRequestComponent,
    ImageUploaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    OverlayPanelModule,
    ImageModule,
    FileUploadModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
