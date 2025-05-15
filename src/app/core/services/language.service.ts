import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { Languages } from '../enums/language.enum';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

	private _currentLang = new BehaviorSubject<string>('en'); // Default language is English
	currentLang$ = this._currentLang.asObservable();
  	// currentLang = this._currentLang.asObservable();

	supportedLanguages: string[] = Object.values(Languages);

	constructor(
		private translate: TranslateService, @Inject(PLATFORM_ID) private platformId: Object
	) { 
		this.init();
	}

	init() {
		console.log("init")
		let storedLanguage: any;
		if (!!isPlatformBrowser(this.platformId)) {
			storedLanguage = localStorage.getItem('lang');
		} 
		// else {
		// 	storedLanguage = localStorage.getItem('lang');
		// }
		
		
		// Get the user's language from the browser/system
		const userLang = navigator.language.split('-')[0]; // This gets the language part (e.g., 'en' from 'en-US')
		let defaultLanguage = storedLanguage ? storedLanguage : userLang;
		console.log(defaultLanguage)

		if (!this.supportedLanguages.includes(defaultLanguage)) {
			defaultLanguage = 'en';
		}

		// Set default language to English or detect the user's language
		this.translate.setDefaultLang(defaultLanguage);
		this.translate.use(defaultLanguage);
		this._currentLang.next(defaultLanguage);

		// this.translate.setDefaultLang('en'); // Set 'en' as the default if we can't detect it
		// this.translate.use(userLang); // Use the user's language
	}

	public getCurrentLanguage(): string {
		let storedLanguage: any;
		storedLanguage = localStorage.getItem('lang');
		
		let browserLanguage = navigator.language.split('-')[0];

		if (!this.supportedLanguages.includes(browserLanguage)) {
			browserLanguage = 'en';
		}

		return storedLanguage || browserLanguage || 'en';
	}

	public switchLanguage(language: string): void {
		// console.log("language ", language)
		this.translate.use(language);
		localStorage.setItem('lang', language);
		this._currentLang.next(language);
	}
}
