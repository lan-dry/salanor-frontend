import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, HostBinding, HostListener, inject, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { Direction } from 'readline';
import { fromEvent, throttleTime, map, pairwise, distinctUntilChanged, share, filter } from 'rxjs';
import { LanguageService } from '../../../core/services/language.service';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@Component({
	selector: 'app-public-header',
	imports: [
		CommonModule, RouterModule, FormsModule, TranslateModule
	],
	templateUrl: './public-header.component.html',
	styleUrl: './public-header.component.scss',
})
export class PublicHeaderComponent {
	company = {
		links: {
			twitter: "https://twitter.com/yourcompany",
			facebook: "https://facebook.com/yourcompany",
			linkedin: "https://linkedin.com/company/yourcompany",
			instagram: "https://instagram.com/yourcompany",
			youtube: "https://youtube.com/c/yourcompany",
			f6s: "https://www.f6s.com/salanor"
		},
		email: "hello@salanor.com",
		phone: "111111111111",
		address: "29 rue jaouhara, Av. Fethi zouhir, Ariana, Tunisia"
	};
	// logo = "logo.png";
	// address = "29 rue jaouhara, Av. Fethi zouhir, Ariana, Tunisia";
	// phone = "+216 55237098";
	// email = "info@kord.com";


	isScrolled = false;
	private languageService = inject(LanguageService);
	languages = [
		{ value: 'fr', label: 'FR' },
		{ value: 'en', label: 'EN' },
		{ value: 'es', label: 'ES' }
	];

	@HostListener('window:scroll', [])
	onWindowScroll() {
		this.isScrolled = window.pageYOffset > 20;
	}

	menuOpen = false;
	selectedLanguage!: string;

	ngOnInit(): void {
		this.languageService.currentLang$.subscribe((lang) =>{
			console.log(lang);
			this.selectedLanguage = lang;
		})
	}

	toggleMenu() {
		this.menuOpen = !this.menuOpen;
	}

	isSidebarOpen = false;

	toggleSidebar() {
		this.isSidebarOpen = !this.isSidebarOpen;
	}

	switchLang(lang: any) {
		// this.translate.use(lang);
		// console.log(this.selectedLanguage)
		this.languageService.switchLanguage(this.selectedLanguage);
	}
	  
  
	
	// topBarVisible = true;

	// @ViewChild('topBar') topBar!: ElementRef;

	// ngAfterViewInit() {
	// 	const observer = new IntersectionObserver(
	// 		([entry]) => {
	// 			this.topBarVisible = entry.isIntersecting;
	// 		},
	// 		{
	// 			root: null,
	// 			threshold: 0.01 // Detect as soon as the top bar starts to go out
	// 		}
	// 	);

	// 	observer.observe(this.topBar.nativeElement);
	// }
	  
}
