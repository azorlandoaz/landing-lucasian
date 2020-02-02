// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { PricingOption } from './components/pricing-option/pricing-option.component';
import { CarouselComponent, CarouselItemElement } from './components/carousel/carousel.component';
import { CarouselItemDirective } from './components/carousel/carousel-item.directive';
import { AboutUsFirstComponent } from './components/about-us-first/about-us-first.component';
import { AboutUsSecondComponent } from './components/about-us-second/about-us-second.component';
import { CarouselItemsService } from './components/carousel/carousel-items.service';
// Services
import { UserService } from './services/user.service';
// pages
import { BannerComponent } from './pages/banner/banner.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ServiceComponent } from './pages/service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    PricingOption,
    CarouselComponent, 
    CarouselItemDirective, 
    CarouselItemElement,
    AboutUsFirstComponent,
    AboutUsSecondComponent,
    BannerComponent,
    AboutUsComponent,
    PricingComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatCardModule
  ],
  providers: [
    UserService,
    CarouselItemsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
