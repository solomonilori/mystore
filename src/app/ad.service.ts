import { Injectable } from "@angular/core";

import { AdItem } from './ad-item';
import { AppComponent } from './app.component';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(
        AppComponent,
        {Product: '', Description: 'Avaliable in Stock!'}
      ),
      new AdItem(
        AppComponent,
        {}
      )
    ]
  }
}