import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path:'users', component: UsersComponent},
  {path:'user-details', component: UserDetailsComponent},
  {path:'user-details/:id', component: UserDetailsComponent},
  { path: '**', redirectTo: 'users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
