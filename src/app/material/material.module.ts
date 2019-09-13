import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


import {MatExpansionModule} from '@angular/material/expansion'; 


import {MatInputModule} from '@angular/material/input'; 
import{MatProgressBarModule} from '@angular/material/progress-bar';
import { MatSidenavModule, MatListModule,  } from "@angular/material";
@NgModule({
  imports: [
    MatButtonModule, MatToolbarModule,MatIconModule, MatExpansionModule, MatInputModule, MatProgressBarModule, MatCardModule, MatSidenavModule, MatListModule
 
  ],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatExpansionModule, MatInputModule, MatProgressBarModule, MatCardModule, MatSidenavModule,  MatListModule]
})
export class MaterialModule { }