import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-default',
  templateUrl: './card-default.component.html',
  styleUrls: ['./card-default.component.scss']
})
export class CardDefaultComponent {
  @Input() cardContent: CardDefault = {
    title: 'Card Title',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus ut arcu sociis feugiat dol aliquet tincidunt feugiat mauris sagittis.'
  }
}

export interface CardDefault {
  title: string,
  body: string,
}
