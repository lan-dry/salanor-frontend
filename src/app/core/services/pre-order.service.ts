import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../interfaces/api-response.interface';
import { Waitlist } from '../interfaces/waitlist.interface';

@Injectable({
  providedIn: 'root'
})
export class PreOrderService {

	private apiUrl = environment.apiUrl+'/pre-order';
	private http = inject(HttpClient);

  	constructor() { }

	  submitPreOrder(data: any): Observable<Waitlist> {
		return this.http.post<ApiResponse<Waitlist>>(this.apiUrl, data).pipe(
			map(response => response.data)
		);
	}
}
