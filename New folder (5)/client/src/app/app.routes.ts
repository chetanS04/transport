import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found-component';
import { authGuard } from './core/guards/auth.guard';

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
    { path: 'not-found', component: NotFoundComponent, canActivate: [authGuard] },
    { path: '**', redirectTo: 'not-found' }
];
