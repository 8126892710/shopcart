import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ManufacturesComponent } from './core/manufactures/manufactures.component';
import {AppRoutingModule} from './app.routes';
import { DataservieService} from './_servies/dataservie.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    ItemdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ManufacturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule
 
  ],
  providers: [DataservieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
