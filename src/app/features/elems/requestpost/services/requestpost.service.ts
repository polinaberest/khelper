import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestPost } from '../models/requestpost.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestPostService {

  constructor(private http: HttpClient) { }

  getAllRequestPosts(): Observable<RequestPost[]> {
    return this.http.get<RequestPost[]>(`${environment.apiBaseUrl}/api/blogposts`);
  }
}
