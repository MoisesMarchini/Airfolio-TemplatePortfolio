import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { TrustedCompaniesComponent } from './components/trusted-companies/trusted-companies.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    TrustedCompaniesComponent,
    ServicesSectionComponent
  ]
})
export class HomeModule { }
