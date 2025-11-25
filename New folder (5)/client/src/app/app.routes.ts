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
        path: 'my-dashboard',
        loadChildren: () =>
            import('./shared/layouts/dashboard/dashboard-routing-module').then(
                (m) => m.dashboardRoutes
            ),
    },
    {
        path: '',
        loadComponent: () =>
            import('./promotional/home/home-component').then(
                (c) => c.HomeComponent
            ),
    },
    {
        path: 'about',
        loadComponent: () =>
            import('./promotional/about/about-component').then(
                (c) => c.AboutComponent
            ),
    },

    {
        path: 'unauthorized',
        canActivate: [authGuard],
        loadComponent: () =>
            import('./shared/components/unauthorized/unauthorized-component').then((m) => m.UnauthorizedComponent),
    },
    { path: 'not-found', component: NotFoundComponent, canActivate: [authGuard] },
    { path: '**', redirectTo: 'not-found' }
];
