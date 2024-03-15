import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { SideMenuComponent } from './side-menu.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [SideMenuComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
   
    FormsModule,
    FontAwesomeModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    RouterModule.forChild([{ path: '', component: SideMenuComponent }]),
  ],
  providers:[
     
  ],
  exports:[
      SideMenuComponent
  ]

})
export class SideModule {}
