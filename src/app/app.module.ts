import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { FootercomponentComponent } from './footercomponent/footercomponent.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchPipe } from './search.pipe';
import { HousedetailsComponent } from './housedetails/housedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    FootercomponentComponent,
    HeadercomponentComponent,
    LogincomponentComponent,
    HomecomponentComponent,
    SearchPipe,
    HousedetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
