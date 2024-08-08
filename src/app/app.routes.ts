import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signUp',
        component: SignUpComponent
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        // path: 'employeeTable/:technology',
        path:'home/:technologyName',
        component: EmployeeTableComponent
    },
    {
        path: '**',
        component: NoPageFoundComponent
    },

];
