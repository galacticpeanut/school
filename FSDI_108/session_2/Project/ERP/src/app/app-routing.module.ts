import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TempCalculatorComponent } from './temp-calculator/temp-calculator.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserListComponent } from './user-list/user-list.component';
import { UesrRegisterComponent } from './uesr-register/uesr-register.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'converter', component: TempCalculatorComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'user/list', component: UserListComponent },
  { path: 'user/new', component: UesrRegisterComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
