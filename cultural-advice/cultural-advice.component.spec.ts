import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalAdviceComponent } from './cultural-advice.component';

describe('CulturalAdviceComponent', () => {
  let component: CulturalAdviceComponent;
  let fixture: ComponentFixture<CulturalAdviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CulturalAdviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CulturalAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
