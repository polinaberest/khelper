import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestPost } from '../models/requestpost.model';
import { RequestPostService } from '../services/requestpost.service';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { User } from 'src/app/features/auth/models/user.model';

@Component({
  selector: 'app-requests-list',
  templateUrl: './requests-list.component.html',
  styleUrls: ['./requests-list.component.css']
})
export class RequestsListComponent implements OnInit{
  requestPosts$?: Observable<RequestPost[]>;
  currentUser: User | undefined;

  constructor(private requestPostService: RequestPostService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user().subscribe((user) => {
      this.currentUser = user;
    });

    //каким -то макаром получить все заявки по пользователю - по айдишнику
    this.requestPosts$ = this.requestPostService.getAllUsersRequests(this.currentUser.id);
  }
}
