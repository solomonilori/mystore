import { Injectable } from "@angular/core";

import { AdItem } from './ad-item';
import { AdJobComponent } from "./ad-job.component";
import { AdprofileComponent } from "./ad-profile.component";

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(
        AdprofileComponent,
        {name: 'Faithful Odigbo', Description: 'Software Engineer, Proficient in all Programming Languages'}
      ),
      new AdItem(
        AdJobComponent,
        { headline: 'New Arrivals!', body: 'Size 45, 46 Nike Boots now available'}
      ),
      new AdItem(
        AdJobComponent,
        { headline: 'Kyle jenner\'\s Oscar clothes now avaliable', body: 'Buy at Discounted Price'}
      )
    ]
  }
}