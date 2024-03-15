import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { LocalStorageService } from '../local-storage.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { UserManagementPageComponent } from '../user-management-page/user-management-page.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { SideModule } from '../side-menu/side-menu.module';
import { UserModule } from '../user-details/user-details.module';
import { UserManageModule } from '../user-management-page/user-management-page.module';


import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    SideModule,
    UserModule,
    UserManageModule,
    FormsModule,
    FontAwesomeModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    RouterModule.forChild([{ path: '', component:AdminDashboardComponent }]),
  ],
  providers:[
      LocalStorageService
  ]
})
export class AdminModule {}
