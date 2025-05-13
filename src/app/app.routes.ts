import { Routes } from '@angular/router';
import { adminRoutes } from './pages/admin/admin.routes';
import { dashboardRoutes } from './pages/dashboard/dashboard.routes';
import { publicRoutes } from './pages/public/public.routes';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
	{ path: 'not-found', component: NotFoundComponent },
	...publicRoutes,
	...adminRoutes,
	...dashboardRoutes
];
