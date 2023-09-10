import { Component } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { RequestPost } from '../../elems/requestpost/models/requestpost.model';
import { RequestPostService } from '../../elems/requestpost/services/requestpost.service';
import { FilterService } from './services/filter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  posts$?: Observable<RequestPost[]>;

  constructor(private readonly requestPostService: RequestPostService,
    private readonly filterService: FilterService) {}

  ngOnInit(): void {
    this.posts$ = this.requestPostService.getAllRequestPosts();

    this.filterService.showUrgentOnly$.subscribe(showUrgentOnly => {
      if (showUrgentOnly && this.posts$) {
        this.posts$ = this.posts$.pipe(
          map(posts => posts.filter(post => post.isUrgent))
        );
      } else {
        this.posts$ = this.requestPostService.getAllRequestPosts();
      }
    });
  }
}
