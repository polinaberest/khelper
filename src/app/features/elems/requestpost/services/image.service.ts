import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RequestPost } from '../models/requestpost.model';
import { HttpClient } from '@angular/common/http';
import { UpdateRequestPost } from '../models/update-requestpost.model';

@Injectable({
  providedIn: 'root',
})
export class ImageService {

  constructor(private http: HttpClient) {}

  // getAllRequestPosts(): Observable<RequestPost[]> {
  //   return of(this.hardcodedPostsMockData);
  //   // this.http.get<RequestPost[]>(
  //   //   `${environment.apiBaseUrl}/api/requests`
  //   // );
  // }

  // getRequestById(id: string): Observable<RequestPost> {
  //   //return this.http.get<RequestPost>(`${environment.apiBaseUrl}/api/requests/${id}`);
  //   return of(
  //     this.hardcodedPostsMockData.find((post) => post.id === id) as RequestPost
  //   );
  // }

  // getAllUsersRequests(userId: string): Observable<RequestPost[]> {
  //   return of(
  //     this.hardcodedPostsMockData.filter((post) => post.author.id === userId)
  //   );
  // }

  // addVolunteerToRequest(id: string, volunteer: User): Observable<RequestPost> {
  //   const url = `${environment.apiBaseUrl}/api/requests/${id}/addVolunteer`;
  //   return this.http.post<RequestPost>(url, { volunteer });
  // }

  // updateRequest(id: string, updatedRequest: UpdateRequestPost): Observable<RequestPost> {
  //   return this.http.put<RequestPost>(`${environment.apiBaseUrl}/api/blogposts/${id}?addAuth=true`, updatedRequest);
  // }

  // deleteRequest(id: string): Observable<BlogPost> {
  //   return this.http.delete<BlogPost>(`${environment.apiBaseUrl}/api/blogposts/${id}?addAuth=true`);
  // }
}
