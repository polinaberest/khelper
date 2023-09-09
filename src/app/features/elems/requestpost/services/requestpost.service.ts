import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RequestPost } from '../models/requestpost.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/features/auth/models/user.model';

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
      author: {
        email: 'author@example.com',
        name: 'Автор поста',
        roles: ['Writer'],
      },
      volunteer: null,
      categories: [{
        id: '1',
        name: 'medicine',
        urlHandle: 'url_handle_1'
      }, 
      {
        id: '2',
        name: 'clothes',
        urlHandle: 'url_handle_2'
      }],
      desiredContainer: {
        id: 111,
        address: "Холодногірська, 11",
        latitude: 150,
        longitude: 140,
        isEmpty: true
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
      content: 'Содержание поста 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. \nBeatae cum aspernatur voluptas ducimus officia, quae consectetur deleniti blanditiis temporibus quaerat cupiditate nulla repudiandae odio accusantium? Quasi omnis nam nulla perspiciatis!' + '<br>Содержание поста 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. \nBeatae cum aspernatur voluptas ducimus officia, quae consectetur deleniti blanditiis temporibus quaerat cupiditate nulla repudiandae odio accusantium? Quasi omnis nam nulla perspiciatis!',
      featuredImageUrl: 'url_изображения_2',
      urlHandle: 'url_handle_2',
      author: {
        email: 'author2@example.com',
        name: 'Автор 2',
        roles: ['Writer'],
      },
      volunteer: null,
      categories: [{
        id: '1',
        name: 'medicine',
        urlHandle: 'url_handle_1'
      }],
      desiredContainer: {
        id: 111,
        address: "Холодногірська, 11",
        latitude: 150,
        longitude: 140,
        isEmpty: true
      },
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
      author: {
        email: 'author3@example.com',
        name: 'Автор поста 3',
        roles: ['Writer'],
      },
      desiredContainer: {
        id: 111,
        address: "Холодногірська, 11",
        latitude: 150,
        longitude: 140,
        isEmpty: true
      },
      volunteer: null,
      categories: [{
        id: '2',
        name: 'clothes',
        urlHandle: 'url_handle_2'
      }],
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
      desiredContainer: {
        id: 111,
        address: "Холодногірська, 11",
        latitude: 150,
        longitude: 140,
        isEmpty: true
      },
      author: {
        email: 'author4@example.com',
        name: 'Автор поста4',
        roles: ['Writer'],
      },
      volunteer: null,
      categories: [{
        id: '1',
        name: 'medicine',
        urlHandle: 'url_handle_1'
      }, {
        id: '2',
        name: 'clothes',
        urlHandle: 'url_handle_2'
      }],
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
      desiredContainer: {
        id: 111,
        address: "Холодногірська, 11",
        latitude: 150,
        longitude: 140,
        isEmpty: true
      },
      author: {
        email: 'author5@example.com',
        name: 'Автор поста5',
        roles: ['Writer'],
      },
      volunteer: null,
      categories: [{
        id: '1',
        name: 'medicine',
        urlHandle: 'url_handle_1'
      }, {
        id: '3',
        name: 'food',
        urlHandle: 'url_handle_2'
      }],
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
      desiredContainer: {
        id: 111,
        address: "Холодногірська, 11",
        latitude: 150,
        longitude: 140,
        isEmpty: true
      },
      author: {
        email: 'author6@example.com',
        name: 'Автор поста6',
        roles: ['Writer'],
      },
      volunteer: null,
      categories: [{
        id: '1',
        name: 'medicine',
        urlHandle: 'url_handle_1'
      }, {
        id: '4',
        name: 'hygiene',
        urlHandle: 'url_handle_2'
      }],
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
    return of(this.hardcodedPostsMockData.find(post => post.id === id) as RequestPost);
  }

  getAllUsersRequests(volunteer: User): Observable<RequestPost[]> {

  }

  addVolunteerToRequest(id: string, volunteer: User): Observable<RequestPost> {
    const url = `${environment.apiBaseUrl}/api/requests/${id}/addVolunteer`;
    return this.http.post<RequestPost>(url, { volunteer });
  }
}
