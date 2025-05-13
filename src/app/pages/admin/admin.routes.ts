import { Routes } from '@angular/router';
// import { AdminLayoutComponent } from './layout/admin-layout.component';
// import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from '../../layout/admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

export const adminRoutes: Routes = [
	{
		path: 'admin',
		component: AdminLayoutComponent,
		children: [
		{ path: '', component: AdminDashboardComponent },
			// other admin routes
		],
	},
];
