import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAustraliansIndicationComponent } from './first-australians-indication.component';

describe('FirstAustraliansIndicationComponent', () => {
  let component: FirstAustraliansIndicationComponent;
  let fixture: ComponentFixture<FirstAustraliansIndicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstAustraliansIndicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstAustraliansIndicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
