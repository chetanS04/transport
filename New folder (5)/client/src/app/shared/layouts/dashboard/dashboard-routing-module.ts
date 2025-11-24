import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard-component';
import { authGuard } from '../../../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            '../../../shared/components/dashboard/dashboard-component'
          ).then((m) => m.DashboardComponent),
      },
      {
        path: 'transactions',
        loadComponent: () =>
          import('../../../features/pages/transactions-page').then((m) => m.TransactionsPageComponent),
      },
      {
        path: 'customers',
        loadComponent: () =>
          import('../../../features/pages/customers-page').then((m) => m.CustomersPageComponent),
      },
      {
        path: 'products',
        loadComponent: () =>
          import('../../../features/pages/products-page').then((m) => m.ProductsPageComponent),
      },
      {
        path: 'tables',
        loadComponent: () =>
          import('../../../features/pages/tables-page').then((m) => m.TablesPageComponent),
      },
      {
        path: 'blog',
        loadComponent: () =>
          import('../../../features/pages/blog-page').then((m) => m.BlogPageComponent),
      },
      {
        path: 'chat',
        loadComponent: () =>
          import('../../../features/pages/chat-page').then((m) => m.ChatPageComponent),
      },
      {
        path: 'team',
        loadComponent: () =>
          import('../../../features/pages/team-page').then((m) => m.TeamPageComponent),
      },
      {
        path: 'gallery',
        loadComponent: () =>
          import('../../../features/pages/gallery-page').then((m) => m.GalleryPageComponent),
      },
      {
        path: 'alerts',
        loadComponent: () =>
          import('../../../features/pages/alerts-page').then((m) => m.AlertsPageComponent),
      },
      {
        path: 'charts',
        loadComponent: () =>
          import('../../../features/pages/charts-page').then((m) => m.ChartsPageComponent),
      },
      {
        path: 'calendar',
        loadComponent: () =>
          import('../../../features/pages/calendar-page').then((m) => m.CalendarPageComponent),
      },
      {
        path: 'analytics',
        loadComponent: () =>
          import('../../../features/pages/analytics-page').then((m) => m.AnalyticsPageComponent),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('../../../features/pages/settings-page').then((m) => m.SettingsPageComponent),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
