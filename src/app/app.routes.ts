import { Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { ErrorPageComponent } from './core/pages/error-page/error-page.component';
import { UserProfileComponent } from './core/pages/user-profile/user-profile.component';
export const routes: Routes = [
    {path:'' , component:HomeComponent},
    {path:'user/:userName' , component:UserProfileComponent},
    {path:'**', pathMatch:'full' , component:ErrorPageComponent},
];
