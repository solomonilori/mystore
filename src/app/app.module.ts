import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AdJobComponent } from './ad-job.component';
import { AdprofileComponent } from './ad-profile.component';
import { AdbannerComponent } from './ad-banner.component';
import { AdDirective } from './ad.directive';
import { AdService } from './ad.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AdJobComponent,
    AdprofileComponent,
    AdbannerComponent,
    AdDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ AdService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
