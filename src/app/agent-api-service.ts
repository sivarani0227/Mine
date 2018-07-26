import {Injectable} from '@angular/core';
import {TravelAgent} from './travel-agent';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class AgentApiService {
    baseUrl = 'http://localhost:3000/agents';

    constructor(private http: HttpClient) { }

    findAllAgents(): Observable<TravelAgent[]> {
        return this.http.get<TravelAgent[]>(this.baseUrl);
    }

    addAgent(agent: TravelAgent): Observable<HttpResponse<{}>> {
        const headers = new HttpHeaders().set('content-type', 'application/json');
        return this.http.post<HttpResponse<{}>>(this.baseUrl, agent, {headers});
    }
}
