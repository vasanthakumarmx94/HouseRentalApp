import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { CommonModule } from '@angular/common';
import { HousedetailsComponent } from './housedetails/housedetails.component';

const routes:Routes=[
  {path:'login' ,component:LogincomponentComponent},
  { path:'home',component:HomecomponentComponent},
  { path:'details',component:HousedetailsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]

})
export class AppRoutingModule { }




