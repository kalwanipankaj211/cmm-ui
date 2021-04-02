import { Component, OnInit , Input } from '@angular/core';
import { FriendService } from '../../services/friend.service';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent implements OnInit {

  @Input() friendData;
  constructor() { }

  ngOnInit(): void {

  }

}
