import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LoginComponent } from './views/home/login/login/login.component';
import { InternshipDetailsComponent } from './views/user/internship-details/internship-details/internship-details.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path:'Login', redirectTo:'/Home/Login', pathMatch:'full'},
  { path:'Register', redirectTo:'/Home/Register', pathMatch:'full'},
  { path:'InternshipDetails/:id', component:InternshipDetailsComponent},

  { path: 'Home', component: HomeLayoutComponent, children:[
    { path: '', loadChildren:()=>import('./views/home/landing-page/landing-page.module').then(m=>m.LandingPageModule) },
    { path: 'Login', loadChildren:()=>import('./views/home/login/login.module').then(m=>m.LoginModule) },
    { path:'Register', loadChildren:()=>import('./views/home/register/register.module').then(m=>m.RegisterModule) },
    { path: 'InternshipListings', loadChildren:()=>import('./views/user/get-internships/get-internships.module').then(m=>m.GetInternshipsModule)},
    { path: 'InternshipDetails/:id', loadChildren:()=>import('./views/user/internship-details/internship-details.module').then(m=>m.InternshipDetailsModule)}
  ] },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
