import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UploadImageResponse } from '../models/uploadImageResponse.model';
import { UploadImageRequest } from '../models/uploadImageRequest.model';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  public uploadImage(image: File): Observable<UploadImageResponse> {
    // Mocked behavior. Remove when backend is implemented.
    return of({ imageUrl: URL.createObjectURL(image) });

    const body: UploadImageRequest = { image };

    return this.http.post<UploadImageResponse>(
      `${environment.apiBaseUrl}/api/images`,
      body
    );
  }
}
