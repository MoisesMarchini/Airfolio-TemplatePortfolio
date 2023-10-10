import { Component } from '@angular/core';

@Component({
  selector: 'app-trusted-companies',
  templateUrl: './trusted-companies.component.html',
  styleUrls: ['./trusted-companies.component.scss']
})
export class TrustedCompaniesComponent {
  brandLogosPath = [
    '/assets/logos/Terra.svg',
    '/assets/logos/Webflow.svg',
    '/assets/logos/LinkedIn.svg',
    '/assets/logos/GenZ.svg',
    '/assets/logos/Trace.svg',
  ]
}
