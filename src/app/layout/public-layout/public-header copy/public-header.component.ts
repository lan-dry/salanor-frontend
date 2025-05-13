import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, HostBinding, HostListener, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { Direction } from 'readline';
import { fromEvent, throttleTime, map, pairwise, distinctUntilChanged, share, filter } from 'rxjs';


@Component({
	selector: 'app-public-header',
	imports: [
		CommonModule, RouterModule
	],
	templateUrl: './public-header.component.html',
	styleUrl: './public-header.component.scss',
})
export class PublicHeaderComponent {
	// company = {
	// 	links: {
	// 	  twitter: "https://twitter.com/yourcompany",
	// 	  facebook: "https://facebook.com/yourcompany",
	// 	  linkedin: "https://linkedin.com/company/yourcompany",
	// 	  instagram: "https://instagram.com/yourcompany",
	// 	  youtube: "https://youtube.com/c/yourcompany"
	// 	}
	// };
	// logo = "logo.png";
	// address = "29 rue jaouhara, Av. Fethi zouhir, Ariana, Tunisia";
	// phone = "+216 55237098";
	// email = "info@kord.com";


	isScrolled = false;

	@HostListener('window:scroll', [])
	onWindowScroll() {
		this.isScrolled = window.pageYOffset > 20;
	}

	menuOpen = false;

	toggleMenu() {
		this.menuOpen = !this.menuOpen;
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
