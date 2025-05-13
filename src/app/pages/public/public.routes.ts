import { Routes } from '@angular/router';
// import { PublicLayoutComponent } from './layout/public-layout.component';
// import { HomeComponent } from './pages/home/home.component';
import { PublicLayoutComponent } from '../../layout/public-layout/public-layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { StartProjectComponent } from './start-project/start-project.component';
import { ProductComponent } from './product/product.component';
import { NewsComponent } from './news/news.component';
import { MarketImpactComponent } from './market-impact/market-impact.component';
import { PreOrderComponent } from './pre-order/pre-order.component';

export const publicRoutes: Routes = [
	{
		path: '',
		component: PublicLayoutComponent,
		children: [
			{ path: '', component: HomeComponent },
			{ path: 'about-us', component: AboutComponent },
			// { path: 'services', component: ServicesComponent },
			{ path: 'contact-us', component: ContactComponent },
			{ path: 'start-project', component: StartProjectComponent },
			{ path: 'product', component: ProductComponent },
			{ path: 'news', component: NewsComponent },
			{ path: 'market-impact', component: MarketImpactComponent },
			{ path: 'pre-order', component: PreOrderComponent },
			{ path: '**', redirectTo: '/not-found' }
			// other public routes
		],
	},
];
