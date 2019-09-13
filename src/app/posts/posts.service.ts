import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {posts} from  './posts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PostsService {
postsCollection: AngularFirestoreCollection<posts>
postDoc: AngularFirestoreDocument<posts>


  constructor(private afs: AngularFirestore) { 
    this.postsCollection = this.afs.collection('posts', ref =>
      ref.orderBy('published', 'desc')
    )
 
  }
getPosts() {
  return this.postsCollection.snapshotChanges().pipe(map(actions => {
    return actions.map(a => {
      const data = a.payload.doc.data() as posts
      const id = a.payload.doc.id
      return {id, ...data}
    })
  }))
}
  getPostData(id: string) {
    this.postDoc = this.afs.doc<posts>(`posts/${id}`)
    return this.postDoc.valueChanges()
  }

  getPostss(id: string) {
    return this.afs.doc<posts>(`posts/${id}`)
  }

  create(data: posts) {
    this.postsCollection.add(data)
  }

getPost(id:string) {
  return this.afs.doc<posts>('posts/${id}')

}
delete(id: string){
return this.getPostss(id).delete()
}
update(id: string, formData) {
return this.getPostss(id).update(formData)
}
}