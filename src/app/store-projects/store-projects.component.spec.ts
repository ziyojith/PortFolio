import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreProjectsComponent } from './store-projects.component';

describe('StoreProjectsComponent', () => {
  let component: StoreProjectsComponent;
  let fixture: ComponentFixture<StoreProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
