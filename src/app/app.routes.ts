import { Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { ErrorPageComponent } from './core/pages/error-page/error-page.component';
import { UserProfileComponent } from './core/pages/user-profile/user-profile.component';
import { LoginComponent } from './core/pages/auth/login/login.component';
import { SignupComponent } from './core/pages/auth/signup/signup.component';
import { ExploreComponent } from './core/pages/explore/explore.component';
import { CourseVisitComponent } from './core/pages/course-visit/course-visit.component';
import { UploadVideoComponent } from './core/components/upload-video/upload-video.component';
export const routes: Routes = [
    {path:'' , component:HomeComponent},
    {path:'upload' , component:UploadVideoComponent},
    {path:'login' , component:LoginComponent},
    {path:'signup' , component:SignupComponent},
    {path:'user/:userName' , component:UserProfileComponent},
    {path:'explore' , component:ExploreComponent},
    {path:'course/:id' , component:CourseVisitComponent},
    {path:'**', pathMatch:'full' , component:ErrorPageComponent},
];
