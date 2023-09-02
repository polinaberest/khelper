import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerMapComponent } from './container-map.component';

describe('ContainerMapComponent', () => {
  let component: ContainerMapComponent;
  let fixture: ComponentFixture<ContainerMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerMapComponent]
    });
    fixture = TestBed.createComponent(ContainerMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
