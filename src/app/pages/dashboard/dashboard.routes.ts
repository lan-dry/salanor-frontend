import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from '../../layout/dashboard-layout/dashboard-layout.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
// import { DashboardLayoutComponent } from './layout/dashboard-layout.component';
// import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      { path: '', component: DashboardHomeComponent },
      // other dashboard routes
    ],
  },
];
