import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LanguageService } from './core/services/language.service';

declare let gtag: Function;

@Component({
	selector: 'app-root',
	imports: [RouterOutlet],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
  	title = 'salanor-frontend';

	constructor(
		router: Router, @Inject(PLATFORM_ID) private platformId: Object, private languageService: LanguageService
	) {
		if (isPlatformBrowser(this.platformId)) {
			router.events.pipe(
				filter(event => event instanceof NavigationEnd)
			).subscribe((event: NavigationEnd) => {
				gtag('config', 'G-LRGV45H8NE', {
					'page_path': event.urlAfterRedirects
				});
			});
		}
		
	}
}
