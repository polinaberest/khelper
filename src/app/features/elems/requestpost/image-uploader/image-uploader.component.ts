import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Subscription } from 'rxjs';
import { FileUploadHandlerEvent } from 'primeng/fileupload';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css'],
})
export class ImageUploaderComponent {
  @Input() imageUrl: string = '';
  @Input() imageDescription: string = '';
  @Output() onImageUpload = new EventEmitter<string>();

  uploadImageSubscription?: Subscription;

  constructor(private imageService: ImageService) {}

  uploadHandlerCallback($event: FileUploadHandlerEvent): void {
    const uploadedFile = $event.files[0];
    if (uploadedFile) {
      this.uploadImageSubscription = this.imageService
        .uploadImage(uploadedFile)
        .subscribe(({ imageUrl }) => {
          this.onImageUpload.emit(imageUrl);
        });
    }
  }
}
