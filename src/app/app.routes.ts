import { Routes } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {PageNotFoundComponent} from './page-not-found-component/page-not-found-component.component';
import {ServicesComponent} from './services-page/services.component';
import { HomeComponent } from './home/home.component';
import { ClientDashboardComponent } from './auth/dashboard/client-dashboard/client-dashboard.component';
import { PrestataireDashboardComponent } from './auth/dashboard/prestataire-dashboard/prestataire-dashboard.component';
import {RegisterComponent} from './auth/register/register.component';
import { SettingsComponent } from './auth/dashboard/settings/settings.component';
import { SearchComponent } from './search/search.component';
import { FinalRegistrationComponent } from './auth/final-registration/final-registration.component';
import { CollabProfileComponent } from './collab-profile/collab-profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { UsageConditionComponent } from './usage-condition/usage-condition.component'; 
import { ServicesPageComponent } from './services-page/services-page.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'add-service', component: ServicesPageComponent },
    { path: 'dashboard-client', component: ClientDashboardComponent},
    { path: 'dashboard-prestataire', component: PrestataireDashboardComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'search', component: SearchComponent },
    { path: 'final-registration', component: FinalRegistrationComponent },
    { path: 'profile', component: CollabProfileComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'terms-and-conditions', component: UsageConditionComponent },


    { path: '**', component: PageNotFoundComponent }

];
