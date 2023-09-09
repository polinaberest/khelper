import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../models/category.model';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient,
    private cookieService: CookieService) { }

  getAllCategories(): Observable<Category[]> {
    //return this.http.get<Category[]>(`${environment.apiBaseUrl}/api/Categories`);
    return of([{name: "medicine"}, {name:"clothes"}, {name:"food"}, {name:"hygiene"}] as Category[]);
  }

  getCategoryById(id: string): Observable<Category> {
    return this.http.get<Category>(`${environment.apiBaseUrl}/api/Categories/${id}`);
  }
}
