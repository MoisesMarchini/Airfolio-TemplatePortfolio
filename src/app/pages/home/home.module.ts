import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { TrustedCompaniesComponent } from './components/trusted-companies/trusted-companies.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    TrustedCompaniesComponent
  ]
})
export class HomeModule { }
