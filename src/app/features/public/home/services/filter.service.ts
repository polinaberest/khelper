import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private showUrgentOnlySubject = new BehaviorSubject<boolean>(false);
  showUrgentOnly$ = this.showUrgentOnlySubject.asObservable();

  toggleUrgentFilter() {
    this.showUrgentOnlySubject.next(!this.showUrgentOnlySubject.value);
  }
}
