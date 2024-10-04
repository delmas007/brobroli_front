import { Routes } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {PageNotFoundComponent} from './page-not-found-component/page-not-found-component.component';
import {ServicesComponent} from './services/services.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import {RegisterComponent} from './auth/register/register.component';


export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'register', component: RegisterComponent },
    { path: '**', component: PageNotFoundComponent },
];
