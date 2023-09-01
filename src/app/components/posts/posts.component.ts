import {Component, OnInit} from '@angular/core';
import {IPost} from "../../interfaces";
import {PostService} from "../../services";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts:IPost[]
  post: IPost

  constructor(private postService:PostService) {
  }

  ngOnInit() {
    this.postService.gelAll().subscribe(value => this.posts = value)
  }
}
