import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightening',
  templateUrl: './lightening.component.html',
  styleUrls: ['./lightening.component.css']
})
export class LighteningComponent implements OnInit {

  
  public light(mydiv:any){
 mydiv.style="background-color:yellow; width: 700px; height:300px; margin-left: 352px;";
  }
  public switchoff(mydiv:any){
    mydiv.style="background-color:gray; width: 700px; height:300px; margin-left: 352px;";
  }
  public black(mydiv:any){
    mydiv.style="background-color:black; color:white; width: 700px; height:300px; margin-left: 352px;";
    mydiv.innerText ="Do Not Disturb Me!!!"
   
  }


  constructor() { }

  ngOnInit(): void {
  }

}
