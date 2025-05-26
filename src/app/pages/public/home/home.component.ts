import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
	selector: 'app-home',
	imports: [ 
		RouterModule, CommonModule, TranslateModule
	],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	animations: [
		trigger('fadeIn', [
			transition(':enter', [
				style({ opacity: 0 }),
				animate('1s 0.5s', style({ opacity: 1 }))
			])
		])
	]
})
export class HomeComponent {
	features = [
		{
			icon: '🚀',
			title: 'Startup Speed',
			description: 'Launch quickly with high-quality, scalable MVPs.'
		},
		{
			icon: '🔒',
			title: 'Security First',
			description: 'Modern standards and encryption by default.'
		},
		{
			icon: '⚙️',
			title: 'Custom Solutions',
			description: 'Tailored platforms, built just for your business.'
		},
		{
			icon: '🌐',
			title: 'Global-Ready',
			description: 'Designed for scale, growth, and international markets.'
		}
	];
}
