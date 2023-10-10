import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardDefaultComponent } from './card-default/card-default.component';
import { SectionDividerComponent } from './section-divider/section-divider.component';



@NgModule({
  declarations: [
  
    HeaderComponent,
       FooterComponent,
       CardDefaultComponent,
       SectionDividerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  
    HeaderComponent,
       FooterComponent,
       CardDefaultComponent,
       SectionDividerComponent
  ]
})
export class ComponentsModule { }
