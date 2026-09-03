import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly httpClient = inject(HttpClient)
  private readonly baseUrl = 'https://exam-app.elevate-bootcamp.cloud'


  getAllDiplomas():Observable<any> {
   return this.httpClient.get(`${this.baseUrl}/api/diplomas`)
  }

  getDiploma(id:string|null):Observable<any>{
   return this.httpClient.get(`${this.baseUrl}/api/diplomas/${id}`)
  }

  getAllQuestions(id:string|null):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/api/questions/exam/${id}`)
  }

  getSubmissiondetailsWithAnalytics(id:string|null):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/api/submissions/${id}`)
  }

  getAllExam(id:string|null):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/api/exams/${id}`)
  }
}
