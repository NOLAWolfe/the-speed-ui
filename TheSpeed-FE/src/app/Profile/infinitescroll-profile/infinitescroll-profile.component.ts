import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/shared/post-service.service';

@Component({
  selector: 'app-infinitescroll-profile',
  templateUrl: './infinitescroll-profile.component.html',
  styleUrls: ['./infinitescroll-profile.component.css']
})
export class InfinitescrollProfileComponent implements OnInit {

  filteredPosts = new Array();

  constructor(private postService: PostServiceService) {

   }

  ngOnInit(): void {
  }

  onScroll() {

    let scrollMes = document.getElementById("scrollable") as HTMLDivElement;

    if (scrollMes.scrollTop >= scrollMes.scrollHeight - scrollMes.clientHeight) {
      this.getMore(3);
    }
  }
  getMore(num) {
    //call to mock service for new json objects 

  }

}
