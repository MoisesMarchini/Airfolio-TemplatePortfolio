import { Component } from '@angular/core';
import { CardDefault } from '../../../../shared/components/card-default/card-default.component';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss']
})
export class ServicesSectionComponent {
  cards: CardDefault[] = [
    {
      title: 'UIUX Design',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
    },
    {
      title: 'Webflow devlopment',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
    },
    {
      title: 'Marketing ',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
    },
    {
      title: 'Branding',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
    },
  ]
  cardIcons = [
    'uiux-design.svg',
    'webflow-development.svg',
    'marketing.svg',
    'branding.svg',
  ]
}
