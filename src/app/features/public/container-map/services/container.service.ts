import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Container } from '../models/container.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  constructor(private http: HttpClient) {}

  hardcodedContainersMockData: Container[] = [
    {
      id: 1,
      address: 'вулиця Полтавський Шлях, 124',
      latitude: 49.9859689,
      longitude: 36.1866491,
      isEmpty: true

    },
    {
      id: 2,
      address: 'вулиця Озерянська, 5',
      latitude: 49.9872753,
      longitude: 36.1923229,
      isEmpty: false

    },
    {
      id: 3,
      address: 'вулиця Полтавський Шлях, 153',
      latitude: 49.9819475,
      longitude: 36.1822076,
      isEmpty: false

    }
  ];

  getAllContainers(): Observable<Container[]> {
    return of(this.hardcodedContainersMockData);
    // this.http.get<Container[]>(
    //   `${environment.apiBaseUrl}/api/containers`
    // );
  }
}
