import { ContactService } from './../../../core/services/contact.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
	selector: 'app-contact',
	imports: [
		FormsModule, CommonModule
	],
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.scss'
})
export class ContactComponent {
	// successMessage = '';
	// errorMessage = '';
	isLoading = false;

	successMessage: string | null = null;
	errorMessage: string | null = null;

	constructor(
		private contactService: ContactService
	) {}

	onSubmit(form: NgForm): void {
		console.log(form.value)
		if (form.invalid) return;
	  
		const formData = form.value;
	  
		// Replace this with a real HTTP POST to your backend
		this.contactService.sendMessage(formData).subscribe({
			next: () => {
				this.successMessage = 'Your message was sent successfully!';
				this.errorMessage = null;
				form.resetForm();
			},
			error: () => {
				this.successMessage = null;
				this.errorMessage = 'Something went wrong. Please try again later.';
			},
		});
	}

	onSubmit_(form: NgForm): void {
		if (form.invalid) return;

		this.isLoading = true;

		const contactData = {
			name: form.value.name,
			email: form.value.email,
			subject: form.value.subject || '(No Subject)',
			message: form.value.message
		};

		this.sendContact(contactData)
		.then(() => {
			this.successMessage = 'Your message has been sent! We’ll respond soon.';
			form.reset();
		})
		.catch(() => {
			this.errorMessage = 'There was a problem sending your message. Please try again.';
		})
		.finally(() => {
			this.isLoading = false;
		});
	}

	// Simulate API call — replace with real integration
	async sendContact(data: any): Promise<void> {
		return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(); // Change to reject() to simulate error
		}, 1500);
		});
	}
}
