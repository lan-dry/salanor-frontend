import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

	private apiUrl = environment.apiUrl+'/contact';
	private http = inject(HttpClient);

	// constructor(private http: HttpClient) {}

	sendMessage(data: any): Observable<any> {
		return this.http.post<any>(`${this.apiUrl}`, data);
	}
}
