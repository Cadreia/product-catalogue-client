import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryStartupComponent } from './category-startup.component';

describe('CategoryStartupComponent', () => {
  let component: CategoryStartupComponent;
  let fixture: ComponentFixture<CategoryStartupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryStartupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryStartupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
