import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-divider',
  template: `
  <div class="w-100" style="overflow: hidden">
    <svg width="1440" height="130" viewBox="0 0 1440 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 129.842V0.568253H1440L0 129.842Z" [attr.fill]="bgColor"/>
    </svg>
  </div>
  `,
})
export class SectionDividerComponent {
  @Input() bgColor: string = '#F6F8FF'
}
