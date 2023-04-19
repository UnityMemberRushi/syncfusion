import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtreeviewComponent } from './formtreeview.component';

describe('FormtreeviewComponent', () => {
  let component: FormtreeviewComponent;
  let fixture: ComponentFixture<FormtreeviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormtreeviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormtreeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
