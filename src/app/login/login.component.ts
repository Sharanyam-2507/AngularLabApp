import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public name:string ="";
 public password:string ="";
 public pplArray :any = [];
 public status:string="";

 public Add(ctrl:any){
  this.pplArray.push({name:this.name , password:this.password});
  var lastIndex = this.pplArray.length-1;
  var lastItem = this.pplArray[lastIndex];
this.status=`User ${lastItem.name} Logged In!!`;
ctrl.style="color:green; background-color:yellow; font-style:italic;"
 }

  constructor() { }

  ngOnInit(): void {
  }

}
