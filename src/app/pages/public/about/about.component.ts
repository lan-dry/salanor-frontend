import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-about',
	imports: [
		CommonModule, RouterModule
	],
	templateUrl: './about.component.html',
	styleUrl: './about.component.scss'
})
export class AboutComponent {
	team = [
		{
			name: 'Aria Kamara',
			role: 'Founder & CEO',
			photo: 'assets/team/aria.jpg'
		},
		{
			name: 'Leo Martins',
			role: 'Lead Engineer',
			photo: 'assets/team/leo.jpg'
		},
		{
			name: 'Sofia Nguyen',
			role: 'Head of Design',
			photo: 'assets/team/sofia.jpg'
		},
		{
			name: 'Tariq Hassan',
			role: 'IoT & Data Science',
			photo: 'assets/team/tariq.jpg'
		}
	];
}
