import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-home',
	imports: [ 
		RouterModule, CommonModule
	],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
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
