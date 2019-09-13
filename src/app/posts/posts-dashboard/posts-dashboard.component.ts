import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage } from 'angularfire2/storage';
import { AuthService } from '../../core/auth.service';
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-posts-dashboard',
  templateUrl: './posts-dashboard.component.html',
  styleUrls: ['./posts-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {
  content: string
  image: string
  title: string
  excerpt: string

  saving = 'Create A Post'

  uploadPercent: Observable<number>
  downloadURL: Observable<string>

  constructor(
    private auth: AuthService,
    private postService: PostsService,
    private storage: AngularFireStorage
  ) { }

  ngOnInit() { }



  createPost() {
    const postData = {


      title: this.title,
      content: this.content,
      excerpt: this.excerpt,
      image: this.image || null,
      published: new Date()

    }

    this.postService.create(postData)
    this.title = ''
    this.content = ''
    this.excerpt = ''
    this.image = ''


    this.saving = 'Post Created!'
    setTimeout(() => (this.saving = 'Create Post'), 3000)
  }

  uploadImage(event) {
    const file = event.target.files[0]
    const path = `posts/${file.name}`
    if (file.type.split('/')[0] !== 'image') {
      return alert('only image files')
    } else {
      const task = this.storage.upload(path, file)
      this.downloadURL = task.downloadURL()
      this.uploadPercent = task.percentageChanges()
      console.log('Image Uploaded!')
      this.downloadURL.subscribe(url => (this.image = url))
    }
  }
}
