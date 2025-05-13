import { Component, inject } from '@angular/core';
import { PreOrderService } from '../../../core/services/pre-order.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../core/services/product.service';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-pre-order',
	imports: [
		ReactiveFormsModule, CommonModule
	],
	templateUrl: './pre-order.component.html',
	styleUrl: './pre-order.component.scss'
})
export class PreOrderComponent {

	preorderForm!: FormGroup;
	successMessage!: string;
	errorMessage!: string;

	private preOrderService = inject(PreOrderService);
	private router = inject(Router);
	private fb = inject(FormBuilder);
	private productService = inject(ProductService);

	ngOnInit(): void {
		this.preorderForm = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			quantity: [1, [Validators.required, Validators.min(1)]]
		});
	}

	get f() { return this.preorderForm.controls; }
	get email() { return this.preorderForm.get('email')!; }
	get quantity() { return this.preorderForm.get('quantity')!; }
	
	onSubmit(): void {
		if (this.preorderForm.invalid) {
		  return; // Stop if form is invalid
		}
	
		const formData = this.preorderForm.value;
		
		this.preOrderService.submitPreOrder(formData).subscribe({
			next: () => {
				this.successMessage = 'Pre-order successful! You will be notified once the product ships.';
				this.errorMessage = '';
				this.preorderForm.reset();  // Reset form after success
			},
			error: (err) => {
				this.errorMessage = 'An error occurred. Please try again later.';
				this.successMessage = '';
			}
		});
	}

	onPreOrderClick(email: string, product: string) {
		this.preOrderService.submitPreOrder({email, product}).subscribe({
			next: () => {
				this.router.navigate(['/thank-you-preorder']);  // Redirect to pre-order thank you page
			},
			error: (err) => {
				console.error('Error creating pre-order', err);
			}
		});
	}
	  
}
