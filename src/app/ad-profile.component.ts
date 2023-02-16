import { Component, Input } from '@angular/core';
import { AdComponent } from './ad.component';

@Component({
  template: `
    <div class="ad-profile">
      <h3>Ad Profile</h3>
      <h5>{{data.name}}</h5>

      <p>{{data.description}}</p>
    </div>
  `
})
export class AdprofileComponent implements AdComponent {
  @Input()data: any;
}