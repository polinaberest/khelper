import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRequestComponent } from './edit-request.component';

describe('EditRequestComponent', () => {
  let component: EditRequestComponent;
  let fixture: ComponentFixture<EditRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditRequestComponent]
    });
    fixture = TestBed.createComponent(EditRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
