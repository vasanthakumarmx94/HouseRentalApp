import { Component, OnInit } from '@angular/core';
import { HomecomponentComponent } from '../homecomponent/homecomponent.component';
@Component({
  selector: 'app-housedetails',
  templateUrl: './housedetails.component.html',
  styleUrls: ['./housedetails.component.css']
})
export class HousedetailsComponent implements OnInit {

  housedata:any[];

  constructor() { }

  ngOnInit(): void {
//this.housedata=listData;
  }

}
