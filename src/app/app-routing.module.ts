import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserProfileComponent} from './user-profile/user-profile.component';
import { UserDetailComponent} from './user-detail/user-detail.component';
const routes: Routes = [
  {path:'userprofile',component:UserProfileComponent},
  {path:'userdetail',component:UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[UserProfileComponent,UserDetailComponent]