import { Routes } from '@angular/router';
import { AUTH_ROUTE } from './feature/auth/presentation/routing/auth-route';
import { DASHBOARD_ROUTE } from './feature/dashboard/presentation/routing/dashboard-route';



export const routes: Routes = [
    ...AUTH_ROUTE,
    ...DASHBOARD_ROUTE
];
