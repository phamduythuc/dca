import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOfEditItemComponent } from './add-of-edit-item.component';

describe('AddOfEditItemComponent', () => {
  let component: AddOfEditItemComponent;
  let fixture: ComponentFixture<AddOfEditItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOfEditItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOfEditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
