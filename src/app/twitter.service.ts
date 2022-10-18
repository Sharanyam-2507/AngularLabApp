import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {
  public showTwitterNotifications() : string[]{
    return["Luca Hammer tweeted ","News for you:Lava from Hawaii's Kilauea Valcano has reached the pacific ocean", 
    "@Dropbox: Did you notice that we updated our logo??"];
  }
  public getCommentsForPost(postId:number){

  }


  constructor() { }
}
