import { Component, OnDestroy, OnInit } from '@angular/core';
import { RequestPost } from '../models/requestpost.model';
import { Category } from '../../category/models/category.model';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestPostService } from '../services/requestpost.service';
import { CategoryService } from '../../category/services/category.service';
import { ImageModule } from 'primeng/image';
import { UpdateRequestPost } from '../models/update-requestpost.model';
import { Container } from 'src/app/features/public/container-map/models/container.model';
import { ContainerService } from 'src/app/features/public/container-map/services/container.service';
import { FileUploadHandlerEvent } from 'primeng/fileupload';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.css'],
})
export class EditRequestComponent implements OnInit, OnDestroy {
  id: string | null = null;
  model?: RequestPost;
  categories$?: Observable<Category[]>;
  containers$?: Observable<Container[]>;
  categoriesIds?: string[];
  desiredContainerId?: number;
  requestImageUrl?: string;

  routeSubscription?: Subscription;
  updateRequestSubscription?: Subscription;
  getRequestSubscription?: Subscription;
  deleteRequestSubscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private requestService: RequestPostService,
    private categoryService: CategoryService,
    private containerService: ContainerService,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.updateRequestSubscription?.unsubscribe();
    this.getRequestSubscription?.unsubscribe();
    this.deleteRequestSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategories();
    this.containers$ = this.containerService.getAllContainers();

    this.routeSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');

        //get blogPost from API
        if (this.id) {
          this.getRequestSubscription = this.requestService
            .getRequestById(this.id)
            .subscribe({
              next: (response) => {
                this.model = response;
                //console.log(this.model);
                this.categoriesIds = response.categories.map((c) => c.id);
              },
            });
        }
      },
    });
  }

  onFormSubmit(): void {
    // convert model to request object
    if (this.model && this.id) {
      var updateRequest: UpdateRequestPost = {
        title: this.model.title,
        content: this.model.content,
        shortDescription: this.model.shortDescription,
        featuredImageUrl: this.model.featuredImageUrl,
        isUrgent: this.model.isUrgent,
        updateDate: new Date(),
        categoriesIds: this.categoriesIds ?? [],
        desiredContainerId: this.desiredContainerId ?? 1,
        untilDate: this.model.untilDate,
      };

      this.updateRequestSubscription = this.requestService
        .updateRequest(this.id, updateRequest)
        .subscribe({
          next: (response) => {
            this.router.navigateByUrl('/my-requests');
          },
        });
    }
  }

  onDelete(): void {
    if (this.id) {
      this.deleteRequestSubscription = this.requestService
        .deleteRequest(this.id)
        .subscribe({
          next: (response) => {
            this.router.navigateByUrl('/my-requests');
          },
        });
    }
  }

  onImageUpload(imageUrl: string): void {
    if (this.model) {
      this.model.featuredImageUrl = imageUrl;
    }
  }
}
