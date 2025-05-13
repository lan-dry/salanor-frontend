import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
	selector: 'app-start-project',
	imports: [
		CommonModule, FormsModule
	],
	templateUrl: './start-project.component.html',
	styleUrl: './start-project.component.scss'
})
export class StartProjectComponent {
	successMessage: string = '';
	errorMessage: string = '';
	isLoading: boolean = false;

	constructor() {}

	// Handle form submission
	onSubmit(form: NgForm): void {
		if (form.invalid) {
		return; // Prevent submission if form is invalid
		}

		this.isLoading = true;

		const projectData = {
		name: form.value.name,
		organization: form.value.organization || 'Not Provided',
		email: form.value.email,
		interest: form.value.interest,
		budget: form.value.budget || 'Not Specified',
		timeline: form.value.timeline || 'Not Provided',
		message: form.value.message
		};

		// Example service call (replace with actual service)
		this.submitProject(projectData).then(response => {
		this.isLoading = false;
		if (response.success) {
			this.successMessage = 'Thank you for reaching out! We will get back to you shortly.';
			form.reset();
		} else {
			this.errorMessage = 'Something went wrong. Please try again later.';
		}
		}).catch(error => {
		this.isLoading = false;
		this.errorMessage = 'Failed to send your request. Please try again later.';
		});
	}

	// Simulate an API call (replace with actual API call)
	async submitProject(data: any): Promise<any> {
		// Simulate an API response after 2 seconds
		return new Promise(resolve => {
		setTimeout(() => {
			resolve({ success: true });  // Change to false to simulate failure
		}, 2000);
		});
	}
}
