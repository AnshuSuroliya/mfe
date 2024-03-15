import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page.component';
import { FileHandlerService } from '../Services/file-handler.service';
import { JwtService } from '../Services/jwt.service';
import { RepoService } from '../Services/repo.service';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: HomePageComponent }]),
  ],
  providers:[
      FileHandlerService,
      JwtService,
      RepoService
  ]
})
export class HomePageModule {}
