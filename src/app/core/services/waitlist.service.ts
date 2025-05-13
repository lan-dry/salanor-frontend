import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response.interface';
import { Waitlist } from '../interfaces/waitlist.interface';

@Injectable({
  providedIn: 'root'
})
export class WaitlistService {

	private apiUrl = environment.apiUrl+'/waitlist';
	private http = inject(HttpClient);

  	constructor() { }

	addToWaitlist(data: {email: string, product: string}): Observable<Waitlist> {
		return this.http.post<ApiResponse<Waitlist>>(this.apiUrl, data).pipe(
			map(response => response.data)
		);
	}
}
