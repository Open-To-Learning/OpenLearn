import { Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { ErrorPageComponent } from './core/pages/error-page/error-page.component';
import { UserProfileComponent } from './core/pages/user-profile/user-profile.component';
import { LoginComponent } from './core/pages/auth/login/login.component';
import { SignupComponent } from './core/pages/auth/signup/signup.component';
export const routes: Routes = [
    {path:'' , component:HomeComponent},
    {path:'login' , component:LoginComponent},
    {path:'signup' , component:SignupComponent},
    {path:'user/:userName' , component:UserProfileComponent},
    {path:'**', pathMatch:'full' , component:ErrorPageComponent},
];
