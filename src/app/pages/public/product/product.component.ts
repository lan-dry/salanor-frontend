import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { WaitlistService } from '../../../core/services/waitlist.service';
import { ApiResponse } from '../../../core/interfaces/api-response.interface';
import { Waitlist } from '../../../core/interfaces/waitlist.interface';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
@Component({
	selector: 'app-product',
	imports: [
		CommonModule, FormsModule, MatProgressSpinnerModule, MatSlideToggleModule, TranslateModule
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	templateUrl: './product.component.html',
	styleUrl: './product.component.scss'
})
export class ProductComponent {

	successMessage: string = '';
	loading: boolean = false;

	private waitlistService = inject(WaitlistService);
	private router = inject(Router);

	scrollToForm() {
		document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
	}

	onPreOrderClick() {
		this.router.navigate(['/pre-order']);
	}
	
	onSubmitEmail(form: NgForm) {
		if (form.valid) {
			// Simulate a service call
			this.successMessage = 'Thanks! You’re now on the waitlist.'+form.value.email;
			
			this.loading = true;
			this.waitlistService.addToWaitlist({email: form.value.email, product: "aether"}).subscribe({
				next: (response: Waitlist) => {
					this.loading = false;
					console.log('Email added:', response);
					this.successMessage = 'Successfully added to waitlist!';
					form.reset();
				},
				error: (err) => {
					this.loading = false;
					console.error('Error:', err);
					this.successMessage = 'Something went wrong.';
				}
			});

			// Clear message after 5 seconds
			setTimeout(() => this.successMessage = '', 50000);
		}
	}
}
