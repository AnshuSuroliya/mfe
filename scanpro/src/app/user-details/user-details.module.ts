import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './user-details.component';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [UserDetailsComponent],
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
    RouterModule.forChild([{ path: '', component: UserDetailsComponent }]),
  ],
  providers:[
     
  ],
  exports:[
      UserDetailsComponent
  ]
})
export class UserModule {}
