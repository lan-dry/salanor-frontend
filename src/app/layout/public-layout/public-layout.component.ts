import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PublicHeaderComponent } from "./public-header/public-header.component";
import { PublicFooterComponent } from "./public-footer/public-footer.component";

@Component({
	selector: 'app-public-layout',
	imports: [
		RouterModule,
		PublicHeaderComponent,
		PublicFooterComponent
	],
	templateUrl: './public-layout.component.html',
	styleUrl: './public-layout.component.scss'
})
export class PublicLayoutComponent {

}
