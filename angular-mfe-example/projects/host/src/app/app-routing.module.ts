import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AdminComponent,
  //},
  {
    path: '',
    loadChildren: () =>
      import('remoteapp1/homeModule').then((module)=>module.HomePageModule)
  },
  {
    path: 'showImg/:path/:name',
    loadChildren: () =>
      import('remoteapp1/imgModule').then((module) => module.ImgModule),
  },
  {
    path:'manageRepo/:name',
    loadChildren: () =>
      import('remoteapp1/repoManageModule').then((module) => module.RepoManageModule),
  },
 
  {
    path:'reset/password',
    loadChildren: () =>
      import('remoteapp2/resetModule').then((module) => module.ResetModule),
  },
  {
    path:'email/verification',
    loadChildren: () =>
      import('remoteapp2/emailModule').then((module) => module.EmailModule),
  },
  {
    path:'addDirectory/:path/:type',
    loadChildren: () =>
      import('remoteapp1/directoryModule').then((module) => module.DirectoryModule),
  },
  {
    path:'repo/:path',
    loadChildren: () =>
      import('remoteapp1/repoModule').then((module) => module.RepoModule),
  },
  // {
  //   path:'admin-dashboard',
  //   loadChildren: () =>
  //     import('remoteapp2/adminModule').then((module) => module.AdminModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
