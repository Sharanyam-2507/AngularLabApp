import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';

@Component({
  selector: 'app-twitter1',
  templateUrl: './twitter1.component.html',
  styleUrls: ['./twitter1.component.css']
})
export class Twitter1Component implements OnInit {
  constructor(public twitObj : TwitterService) { }
    
  public PlugFb(){
    return this.twitObj.showTwitterNotifications();
  }

  

  ngOnInit(): void {
  }

}
