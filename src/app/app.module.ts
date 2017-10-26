import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { TeachingComponent } from './teaching/teaching.component';
import { PublicationsComponent } from './publications/publications.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    TeachingComponent,
    PublicationsComponent,
    AboutComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
