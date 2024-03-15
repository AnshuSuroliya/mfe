import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { EditProfilePageComponent } from './edit-profile-page.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [EditProfilePageComponent],
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
    RouterModule.forChild([{ path: '', component: EditProfilePageComponent }]),
  ],
  providers:[
     
  ],
  exports:[
      EditProfilePageComponent
  ]

})
export class SideModule {}
