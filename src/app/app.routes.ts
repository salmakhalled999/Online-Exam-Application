import { Routes } from '@angular/router';
import { Login } from './feature/auth/presentation/pages/login/login';
import { Email } from './feature/auth/presentation/pages/email/email';
import { VerifyEmail } from './feature/auth/presentation/pages/verify-email/verify-email';
import { UserInfo } from './feature/auth/presentation/pages/user-info/user-info';
import { Password } from './feature/auth/presentation/pages/password/password';
import { ForgotPassword } from './feature/auth/presentation/pages/forgot-password/forgot-password';
import { CreatePassword } from './feature/auth/presentation/pages/create-password/create-password';
import { VerifyOtp } from './feature/auth/presentation/pages/verify-otp/verify-otp';
import { LoginError } from './feature/auth/presentation/pages/login-error/login-error';

export const routes: Routes = [
    {path:'', component: Login, pathMatch:'full'},
    {path:'login', component: Login},
    {path:'login-error', component: LoginError},
    {path:'email', component: Email},
    {path:'verify-email', component: VerifyEmail},
    {path:'user-info', component: UserInfo},
    {path:'password', component: Password},
    {path:'forgot-password', component: ForgotPassword},
    {path:'create-password', component: CreatePassword},
    {path:'verify-otp', component: VerifyOtp},
    // {path:'**', component:}
];
