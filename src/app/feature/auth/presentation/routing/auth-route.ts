import { Routes } from '@angular/router';
import { Login } from '../pages/login/login';
import { Email } from '../pages/email/email';
import { VerifyEmail } from '../pages/verify-email/verify-email';
import { UserInfo } from '../pages/user-info/user-info';
import { Password } from '../pages/password/password';
import { ForgotPassword } from '../pages/forgot-password/forgot-password';


export const AUTH_ROUTE: Routes= [
    {path:'', component: Login, pathMatch:'full'},
    {path:'login', component: Login},
    {path:'email', component: Email},
    {path:'verify-email', component: VerifyEmail},
    {path:'user-info', component: UserInfo},
    {path:'password', component: Password},
    {path:'forgot-password', component: ForgotPassword},
    // {path:'**', component:}
];