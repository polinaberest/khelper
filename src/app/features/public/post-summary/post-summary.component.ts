import { Component, Input } from '@angular/core';
import { RequestPost } from '../../elems/requestpost/models/requestpost.model';

@Component({
  selector: 'app-post-summary',
  templateUrl: './post-summary.component.html',
  styleUrls: ['./post-summary.component.css']
})
export class PostSummaryComponent {
  @Input() 
  postSummary?: RequestPost;

}
