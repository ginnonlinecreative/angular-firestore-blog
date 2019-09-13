import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes } from '@angular/router';
import { PostDashboardComponent } from'./posts-dashboard/posts-dashboard.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsService } from './posts.service';
import { PostDetailComponent } from './posts-detail/posts-detail.component';

const routes: Routes = [
  {path: 'blog', component: PostsListComponent},
  {path: 'blog/:id', component: PostDetailComponent},
{path: 'dashboard', component: PostDashboardComponent}
]
@NgModule({
  imports: [
    SharedModule, RouterModule.forChild(routes)
  ],
  declarations: [PostDashboardComponent,
  PostDetailComponent, 
  PostsListComponent],
  providers: [PostsService]
})
export class PostsModule { }