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
    FormatTextPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    OverlayPanelModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
