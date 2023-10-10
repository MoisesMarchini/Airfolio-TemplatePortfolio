import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardDefaultComponent } from './card-default/card-default.component';



@NgModule({
  declarations: [
  
    HeaderComponent,
       FooterComponent,
       CardDefaultComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  
    HeaderComponent,
       FooterComponent,
       CardDefaultComponent
  ]
})
export class ComponentsModule { }
