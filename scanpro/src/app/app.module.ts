import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EditProfilePageComponent } from './edit-profile-page/edit-profile-page.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

import { UserDetailsComponent } from './user-details/user-details.component';
import { UserManagementPageComponent } from './user-management-page/user-management-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
