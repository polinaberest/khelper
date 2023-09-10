import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RequestPost } from '../models/requestpost.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/features/auth/models/user.model';
import { userMock } from 'src/app/features/auth/services/auth.service';
import { UpdateRequestPost } from '../models/update-requestpost.model';

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
      author: userMock,
      volunteer: null,
      categories: [
        {
          id: '1',
          name: 'medicine',
          urlHandle: 'url_handle_1',
        },
        {
          id: '2',
          name: 'clothes',
          urlHandle: 'url_handle_2',
        },
      ],
      desiredContainer: {
        id: 111,
        address: 'Холодногірська, 11',
        latitude: 150,
        longitude: 140,
        isEmpty: true,
      },
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
      content:
        'Содержание поста 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. \nBeatae cum aspernatur voluptas ducimus officia, quae consectetur deleniti blanditiis temporibus quaerat cupiditate nulla repudiandae odio accusantium? Quasi omnis nam nulla perspiciatis!' +
        '<br>Содержание поста 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. \nBeatae cum aspernatur voluptas ducimus officia, quae consectetur deleniti blanditiis temporibus quaerat cupiditate nulla repudiandae odio accusantium? Quasi omnis nam nulla perspiciatis!',
      featuredImageUrl: 'url_изображения_2',
      author: {
        id: '0fb92467-10d4-4e2b-8879-71a8d8c015e2',
        email: 'author2@example.com',
        name: 'Автор 2',
        roles: ['Writer'],
      },
      volunteer: null,
      categories: [
        {
          id: '1',
          name: 'medicine',
          urlHandle: 'url_handle_1',
        },
      ],
      desiredContainer: {
        id: 111,
        address: 'Холодногірська, 11',
        latitude: 150,
        longitude: 140,
        isEmpty: true,
      },
      publishDate: new Date('2023-08-28'),
      updateDate: new Date('2023-08-29'),
      untilDate: new Date('2023-09-30'),
      isUrgent: false,
      isFulfilled: true,
    },
    {
      id: '3',
      title: 'Заголовок поста 3',
      shortDescription: 'Краткое описание поста 1',
      content: 'Содержание поста 1',
      featuredImageUrl: 'url_изображения_1',

      author: userMock,
      desiredContainer: {
        id: 111,
        address: 'Холодногірська, 11',
        latitude: 150,
        longitude: 140,
        isEmpty: true,
      },
      volunteer: null,
      categories: [
        {
          id: '2',
          name: 'clothes',
          urlHandle: 'url_handle_2',
        },
      ],
      publishDate: new Date('2023-08-29'),
      updateDate: new Date('2023-08-30'),
      untilDate: new Date('2023-08-31'),
      isUrgent: false,
      isFulfilled: false,
    },
    {
      id: '4',
      title: 'Заголовок поста 2',
      shortDescription: 'Краткое описание поста 2',
      content: 'Содержание поста 2',
      featuredImageUrl: 'url_изображения_2',
      desiredContainer: {
        id: 111,
        address: 'Холодногірська, 11',
        latitude: 150,
        longitude: 140,
        isEmpty: true,
      },
      author: {
        id: '0fb92467-10d4-4e2b-8879-71a8d8c015e4',
        email: 'author4@example.com',
        name: 'Автор поста4',
        roles: ['Writer'],
      },
      volunteer: null,
      categories: [
        {
          id: '1',
          name: 'medicine',
          urlHandle: 'url_handle_1',
        },
        {
          id: '2',
          name: 'clothes',
          urlHandle: 'url_handle_2',
        },
      ],
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
      desiredContainer: {
        id: 111,
        address: 'Холодногірська, 11',
        latitude: 150,
        longitude: 140,
        isEmpty: true,
      },
      author: userMock,
      volunteer: null,
      categories: [
        {
          id: '1',
          name: 'medicine',
          urlHandle: 'url_handle_1',
        },
        {
          id: '3',
          name: 'food',
          urlHandle: 'url_handle_2',
        },
      ],
      publishDate: new Date('2023-08-29'),
      updateDate: new Date('2023-08-30'),
      untilDate: new Date('2023-08-31'),
      isUrgent: false,
      isFulfilled: false,
    },
    {
      id: '6',
      title: 'Заголовок поста 2',
      shortDescription: 'Краткое описание поста 2',
      content: 'Содержание поста 2',
      featuredImageUrl: 'url_изображения_2',
      desiredContainer: {
        id: 111,
        address: 'Холодногірська, 11',
        latitude: 150,
        longitude: 140,
        isEmpty: true,
      },
      author: {
        id: '0fb92467-10d4-4e2b-8879-71a8d8c015ef',
        email: 'author6@example.com',
        name: 'Автор поста6',
        roles: ['Writer'],
      },
      volunteer: null,
      categories: [
        {
          id: '1',
          name: 'medicine',
          urlHandle: 'url_handle_1',
        },
        {
          id: '4',
          name: 'hygiene',
          urlHandle: 'url_handle_2',
        },
      ],
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
    //   `${environment.apiBaseUrl}/api/requests`
    // );
  }

  getRequestById(id: string): Observable<RequestPost> {
    //return this.http.get<RequestPost>(`${environment.apiBaseUrl}/api/requests/${id}`);
    return of(
      this.hardcodedPostsMockData.find((post) => post.id === id) as RequestPost
    );
  }

  getAllUsersRequests(userId: string): Observable<RequestPost[]> {
    return of(
      this.hardcodedPostsMockData.filter((post) => post.author.id === userId)
    );
  }

  addVolunteerToRequest(id: string, volunteer: User): Observable<RequestPost> {
    const url = `${environment.apiBaseUrl}/api/requests/${id}/addVolunteer`;
    return this.http.post<RequestPost>(url, { volunteer });
  }

  updateRequest(id: string, updatedRequest: UpdateRequestPost): Observable<RequestPost> {
    return this.http.put<RequestPost>(`${environment.apiBaseUrl}/api/requests/${id}?addAuth=true`, updatedRequest);
  }

  deleteRequest(id: string): Observable<RequestPost> {
    return this.http.delete<RequestPost>(`${environment.apiBaseUrl}/api/requests/${id}?addAuth=true`);
  }
}
