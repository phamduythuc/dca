import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTokenDcaComponent } from './list-token-dca.component';

describe('ListTokenDcaComponent', () => {
  let component: ListTokenDcaComponent;
  let fixture: ComponentFixture<ListTokenDcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTokenDcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTokenDcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
