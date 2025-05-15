import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
	selector: 'app-public-footer',
	imports: [
		CommonModule, RouterModule, TranslateModule
	],
	templateUrl: './public-footer.component.html',
	styleUrl: './public-footer.component.scss'
})
export class PublicFooterComponent {
	email = "hello@salanor.com"
}
