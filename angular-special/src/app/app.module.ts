import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//public components
import { NavbarComponent } from './public/navbar/navbar.component';

//components
import { PrincipalComponent } from './public/principal/principal.component';
import { ScrollItemsComponent } from './components/scroll-items/scroll-items.component';
import { FootComponent } from './public/foot/foot.component';
import { DatesItemsComponent } from './components/dates-items/dates-items.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrincipalComponent,
    ScrollItemsComponent,
    FootComponent,
    DatesItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
