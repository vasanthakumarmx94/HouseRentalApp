import { NumberSymbol } from '@angular/common';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit {
  public show:boolean = false;
  public searchContent:any = '';
  toggle(){
    this.show = !this.show;
  }


  listData:any[];
  hno:number=0;
  address:string="";
  owname:string="";
  mobile:string="";
  advance:number=0;
  rent:number=0;
  descr:string="";
  addhouseForm:FormGroup=new FormGroup({});
  updatehouseForm:FormGroup=new FormGroup({});
  houseArray:Array<House>;

  constructor(private fb:FormBuilder) {
    this.listData=[{ hno: 1, address: "mysore",owname: "Vasanthakumar",mobile: "9898777877",advance: 100000,
    rent: 1000,descr: "its good location near bus stop"},
    {
      hno: 2, address: "Ashok Nagar, mysore",owname: "Pratham",mobile: "9898887877",advance: 20000,
      rent: 2000,descr: "Very good facility ,near to road "
    },
    {
      hno: 3, address: "#112 Gandinagar, Tumakur",owname: "Radha",mobile: "9898444566",advance: 40000,
      rent: 3000,descr: "2BHK,,near tomain road "
    },
    {
      hno: 4, address: "#112 Rajaji nagar, banglore",owname: "Mara",mobile: "9898444588",advance: 35000,
      rent: 3500,descr: "6842 Heath Street, Houston, TX 77016 (MLS# 61755281) is a Single Family property with 3 bedrooms, 1 full bathroom and 1 partial bathroom. 6842 Heath Street is currently listed for $164,900 and was received on November 10, 2021. "
    }
  ];

  


    this.addhouseForm=this.fb.group({
      hno:new FormControl("",[Validators.required]),
      address:new FormControl("",[Validators.required]),
      owname:new FormControl("",[Validators.required]),
      mobile:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(11),Validators.pattern("^[0-9]*$")]),
      advance:new FormControl("",[Validators.required]),
      rent:new FormControl("",[Validators.required]),
      descr:new FormControl("",[Validators.required])

    })
   }
   
   

  ngOnInit(): void {
    // this.addhouseForm=new FormGroup({
    //   hno:new FormControl("",[Validators.required]),
    //   address:new FormControl("",[Validators.required]),
    //   owname:new FormControl("",[Validators.required]),
    //   mobile:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(11),Validators.pattern("^[0-9]*$")]),
    //   advance:new FormControl("",[Validators.required]),
    //   rent:new FormControl("",[Validators.required]),
    //   descr:new FormControl("",[Validators.required])
    // })
  }


  get Hno(){
    return this.addhouseForm.get("hno");
  }
  get Address(){
    return this.addhouseForm.get("address");
  }
  get Owname(){
    return this.addhouseForm.get("owname");
  }
  get Mobile(){
    return this.addhouseForm.get("mobile");
  }
  get Advance(){
    return this.addhouseForm.get("advance");
  }
  get Rent(){
    return this.addhouseForm.get("rent");
  }
  get Descr(){
    return this.addhouseForm.get("descr");
  }
  addhouseFun(){
    this.houseArray.push(new House(this.hno,this.address,this.owname,this.mobile,this.advance,this.rent,this.descr));
    //this.houseArray.push(new House(this.addhouseForm.value));


  }
  updatehouseFun(){

  }
 public  addhouse():void{
    this.listData.push(this.addhouseForm.value);
    //console.log(this.addhouseForm.value);
    this.addhouseForm.reset();
  }
  reset(){
    this.addhouseForm.reset();
  }
  removeitem(element){
  this.listData.forEach((value,index)=> {
  if(value==element){
    this.listData.splice(index,1);
  }
});
  }
  hno1:any;
  address1:string;
  ownername1:string;
  mobile1:string;
  advance1:number;
  rent1:number
  descr1:string;
  editButtonClick(edithno:any){
    var house=this.listData.find(val=>val.Hno == edithno);
    this.hno1=house.hno;
    this.address1=house.address;
    this.ownername1=house.owname;
    this.mobile1=house.mobile;
    this.advance1=house.advance;
    this.rent1=house.rent;
    this.descr1=house.descr;
    console.log(house.hno);
    
  }
  cancel(){

  }

}

class House{
  HouseNo:number;
  House_Address:string;
  Owname:string;
  Mobile:string;
  Advance:number;
  Rent:number;
  Descr:string;

constructor(id:number,House_Address:string,Owname:string,Mobile:string,
  Advance:number,Rent:number, Descr:string){
    this.HouseNo=id;
    this.House_Address=House_Address;
    this.Owname=Owname;
    this.Mobile=Mobile;
    this.Advance=Advance;
    this.Rent=Rent;
    this.Descr=Descr;
  }

}





