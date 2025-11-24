import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () =>
            import('./features/auth/login/login-component').then(
                (c) => c.LoginComponent
            ),
    },
    {
        path: '',
        loadChildren: () =>
            import('./shared/layouts/dashboard/dashboard-routing-module').then(
                (m) => m.dashboardRoutes
            ),
    },
];
