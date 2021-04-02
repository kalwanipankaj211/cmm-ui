import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { FriendService } from '../services/friend.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  response : any;
  constructor(private friendService : FriendService) { }

  ngOnInit(): void {
    this.friendService.getUsers().subscribe((data: any) => {
      if (data) {
        this.response = data.users;
        console.log("data",data);
      } else {
        console.log("data Not Found");
      }
    }, error => {
      console.log("data Not Found");
      // this.loaderService.hide();
      // console.log('error in Project Service',error);
    });
  }

}
