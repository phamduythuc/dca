import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforDcaComponent } from './infor-dca.component';

describe('InforDcaComponent', () => {
  let component: InforDcaComponent;
  let fixture: ComponentFixture<InforDcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InforDcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InforDcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
