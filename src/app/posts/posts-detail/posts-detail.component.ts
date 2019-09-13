import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {posts} from '../posts';
import {PostsService } from '../posts.service';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-posts-detail',
  templateUrl: 'posts-detail.component.html',
  styleUrls: ['posts-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: posts
  editing: boolean = false

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostsService,
    public auth: AuthService
  ) {}

  ngOnInit() {
    this.getPosts()
  }

  getPosts(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.postService.getPostData(id).subscribe(post => (this.post = post))
  }

  updatePost() {
    const formData = {
      title: this.post.title,
      content: this.post.content
    }
    const id = this.route.snapshot.paramMap.get('id')
    this.postService.update(id, formData)
    this.editing = false
  }

  delete() {
    const id = this.route.snapshot.paramMap.get('id')
    this.postService.delete(id)
    this.router.navigate(['/blog'])
  }
}
