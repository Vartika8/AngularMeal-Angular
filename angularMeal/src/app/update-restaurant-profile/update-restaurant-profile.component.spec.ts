import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRestaurantProfileComponent } from './update-restaurant-profile.component';

describe('UpdateRestaurantProfileComponent', () => {
  let component: UpdateRestaurantProfileComponent;
  let fixture: ComponentFixture<UpdateRestaurantProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRestaurantProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRestaurantProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
