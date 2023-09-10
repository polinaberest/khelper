import { Component } from '@angular/core';
import { FilterService } from 'src/app/features/public/home/services/filter.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private filterService: FilterService) {}

  toggleFilter() {
    this.filterService.toggleUrgentFilter();
  }

}
