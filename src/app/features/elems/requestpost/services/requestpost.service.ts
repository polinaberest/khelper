import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RequestPost } from '../models/requestpost.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequestPostService {
  hardcodedPostsMockData: RequestPost[] = [
    {
      id: '1',
      title: 'Заголовок поста 1',
      shortDescription: 'Краткое описание поста 1',
      content: 'Содержание поста 1',
      featuredImageUrl: 'url_изображения_1',
      urlHandle: 'url_handle_1',
      author: 'Автор 1',
      publishDate: new Date('2023-08-29'),
      updateDate: new Date('2023-08-30'),
      untilDate: new Date('2023-08-31'),
      isUrgent: true,
      isFulfilled: false,
    },
    {
      id: '2',
      title: 'Заголовок поста 2',
      shortDescription: 'Краткое описание поста 2',
      content: 'Содержание поста 2',
      featuredImageUrl: 'url_изображения_2',
      urlHandle: 'url_handle_2',
      author: 'Автор 2',
      publishDate: new Date('2023-08-28'),
      updateDate: new Date('2023-08-29'),
      untilDate: new Date('2023-08-31'),
      isUrgent: false,
      isFulfilled: true,
    },
    {
      id: '3',
      title: 'Заголовок поста 1',
      shortDescription: 'Краткое описание поста 1',
      content: 'Содержание поста 1',
      featuredImageUrl: 'url_изображения_1',
      urlHandle: 'url_handle_1',
      author: 'Автор 1',
      publishDate: new Date('2023-08-29'),
      updateDate: new Date('2023-08-30'),
      untilDate: new Date('2023-08-31'),
      isUrgent: true,
      isFulfilled: false,
    },
    {
      id: '4',
      title: 'Заголовок поста 2',
      shortDescription: 'Краткое описание поста 2',
      content: 'Содержание поста 2',
      featuredImageUrl: 'url_изображения_2',
      urlHandle: 'url_handle_2',
      author: 'Автор 2',
      publishDate: new Date('2023-08-28'),
      updateDate: new Date('2023-08-29'),
      untilDate: new Date('2023-08-31'),
      isUrgent: false,
      isFulfilled: true,
    },
    {
      id: '5',
      title: 'Заголовок поста 1',
      shortDescription: 'Краткое описание поста 1',
      content: 'Содержание поста 1',
      featuredImageUrl: 'url_изображения_1',
      urlHandle: 'url_handle_1',
      author: 'Автор 1',
      publishDate: new Date('2023-08-29'),
      updateDate: new Date('2023-08-30'),
      untilDate: new Date('2023-08-31'),
      isUrgent: true,
      isFulfilled: false,
    },
    {
      id: '6',
      title: 'Заголовок поста 2',
      shortDescription: 'Краткое описание поста 2',
      content: 'Содержание поста 2',
      featuredImageUrl: 'url_изображения_2',
      urlHandle: 'url_handle_2',
      author: 'Автор 2',
      publishDate: new Date('2023-08-28'),
      updateDate: new Date('2023-08-29'),
      untilDate: new Date('2023-08-31'),
      isUrgent: false,
      isFulfilled: true,
    },
  ];

  constructor(private http: HttpClient) {}

  getAllRequestPosts(): Observable<RequestPost[]> {
    return of(this.hardcodedPostsMockData);
    // this.http.get<RequestPost[]>(
    //   `${environment.apiBaseUrl}/api/blogposts`
    // );
  }
}
