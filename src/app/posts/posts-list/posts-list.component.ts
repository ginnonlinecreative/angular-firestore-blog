import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {posts} from '../posts';
import {PostsService } from '../posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
posts: Observable<posts[]>

  constructor(private PostsService: PostsService) { }

  ngOnInit() {
    this.posts = this.PostsService.getPosts()
    console.log(this)
  }

}