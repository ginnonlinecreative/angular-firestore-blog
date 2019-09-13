import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './environments/environment';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

import {PostsModule } from './posts/posts.module';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '',     component: HomeComponent},
  { path: '', redirectTo: '/blog', pathMatch: 'full'},
  { path: '', loadChildren: './posts/posts.module#PostsModule'},
 { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
   { path: 'projects', component: ProjectsComponent },

]

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule,
  RouterModule.forRoot(routes),
  AngularFireModule.initializeApp(environment.firebase),
  AngularFirestoreModule,
  AngularFireAuthModule,
  AngularFireStorageModule,
  PostsModule,

   CoreModule, SharedModule ],
  declarations: [ AppComponent, ServicesComponent, AboutComponent, ProjectsComponent, HomeComponent, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
