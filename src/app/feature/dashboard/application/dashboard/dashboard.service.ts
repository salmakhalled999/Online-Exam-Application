import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly httpClient = inject(HttpClient)
  private readonly baseUrl = 'https://exam-app.elevate-bootcamp.cloud'


  getAllDeplomas(): Observable<any> {
   return this.httpClient.get(`${this.baseUrl}/api/diplomas`)
  }

  getDeploma(){
    this.httpClient.get(`${this.baseUrl}/api/diplomas/{id}`)
  }
}
