import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RequestPost } from '../../elems/requestpost/models/requestpost.model';
import { RequestPostService } from '../../elems/requestpost/services/requestpost.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  posts$?: Observable<RequestPost[]>;

  constructor(private readonly requestPostService: RequestPostService) {}

  ngOnInit(): void {
    this.posts$ = this.requestPostService.getAllRequestPosts();
  }
}
