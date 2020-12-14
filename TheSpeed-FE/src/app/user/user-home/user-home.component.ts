import { Component, OnInit } from '@angular/core';
import { POST_ICONS } from 'src/app/shared/constants';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  POST_LIKE = POST_ICONS.POST_LIKE;
  POST_COMMENT = POST_ICONS.POST_COMMENT;
  POST_SHARE = POST_ICONS.POST_SHARE;

  constructor() { }

  ngOnInit() {
  }


}
