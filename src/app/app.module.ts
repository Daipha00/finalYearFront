import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, TransferState } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpBackend, provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ContainerComponent } from './container/container.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { CreateMemberComponent } from './create-member/create-member.component';
import { ManageComponent } from './manage/manage.component';


// import { BrowserModule, provideClientHydration } from '@angular/platform-browser';


import {MatFormFieldModule} from '@angular/material/form-field';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatToolbarModule }  from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
// import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UpdateMemberComponent } from './update-member/update-member.component';
import { ReportComponent } from './report/report.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { OfficerComponent } from './officer/officer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { UserService } from './_services/user.service';
import { ProfileComponent } from './profile/profile.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    SideBarComponent,
    HeaderComponent,
    CreateMemberComponent,
    ManageComponent,
    UpdateMemberComponent,
    ReportComponent,
    LoginComponent,
    UserComponent,
    OfficerComponent,
    ForbiddenComponent,
    HomeComponent,
    AdminComponent,
    ProfileComponent,
    ViewDetailsComponent,
    DashboardComponent,
    RegisterComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    // FontAwesomeModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatGridListModule,
    HttpClientModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    MatPaginatorModule,
    MatSidenavModule,
    RouterModule,
    SweetAlert2Module.forRoot()
    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),

  AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    },
    UserService
  

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
