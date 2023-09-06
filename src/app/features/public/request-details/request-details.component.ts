import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestPost } from '../../elems/requestpost/models/requestpost.model';
import { ActivatedRoute } from '@angular/router';
import { RequestPostService } from '../../elems/requestpost/services/requestpost.service';
import { User } from '../../auth/models/user.model';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css']
})
export class RequestDetailsComponent implements OnInit{
  id: string | null = null;
  currentUser: User | undefined;
  requestPost$?: Observable<RequestPost>;
  
  constructor(private route: ActivatedRoute,
    private authService: AuthService,
    private requestPostService: RequestPostService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: params => {
        this.id = params.get('id');
      }
    });

    if(this.id){
      this.requestPost$ = this.requestPostService.getRequestById(this.id);
    }

    this.authService.user().subscribe((user) => {
      this.currentUser = user;
    });
  }

  onVolunteerClick(request: RequestPost): void {
    if (this.currentUser) {
      this.requestPostService
        .addVolunteerToRequest(request.id, this.currentUser)
        .subscribe((updatedRequest) => {
          // Обновите заявку после успешного добавления волонтера
          // Можете обновить request$ или как-либо иначе обработать результат
        });
    }
  }
}
