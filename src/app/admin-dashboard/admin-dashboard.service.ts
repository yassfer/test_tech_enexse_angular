import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AgentView } from '../entities/AgentView';
@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

  private baseUrl = 'http://localhost:5000/api/v1';
  constructor(private http: HttpClient) { }

  getAgentByStatus(): Observable<any> {
    return this.http.get<AgentView>(`${this.baseUrl}/agents/byStatus`);
  }
}
