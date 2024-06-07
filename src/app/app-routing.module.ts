import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContainerComponent } from './container/container.component';
import { ManageComponent } from './manage/manage.component';
import { CreateMemberComponent } from './create-member/create-member.component';
import { LoginComponent } from './login/login.component';
import { ReportComponent } from './report/report.component';
import { UpdateMemberComponent } from './update-member/update-member.component';
import { UserComponent } from './user/user.component';
import { OfficerComponent } from './officer/officer.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './_auth/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'officer', component:OfficerComponent},
   {path:'register',component:RegisterComponent}, 
  {path:'container',component:ContainerComponent,
  children:[
      {path:'create-member',component:CreateMemberComponent},
      {path:'update-member',component:UpdateMemberComponent},
      {path:'side-bar/manage',component:ManageComponent,
       canActivate:[AuthGuard], data:{roles: ['Admin']} 
      },
      {path:'side-bar/report',component:ReportComponent},
      {path:'user',component:UserComponent}, 
      {path:'forbidden',component:ForbiddenComponent}, 
      {path:'side-bar/view-details/:id',component:ViewDetailsComponent}, 
      {path:'side-bar/home',component:HomeComponent},
      {path:'admin',component:AdminComponent},
      {path:'side-bar/dashboard',component:DashboardComponent},
      {path:'side-bar/profile',component:ProfileComponent,
      canActivate:[AuthGuard], data:{roles: ['User']} 
      }
     
      
    ]
} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
