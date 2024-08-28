import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDcaComponent } from './add-dca.component';

describe('AddDcaComponent', () => {
  let component: AddDcaComponent;
  let fixture: ComponentFixture<AddDcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
