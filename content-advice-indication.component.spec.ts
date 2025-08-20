import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAdviceIndicationComponent } from './content-advice-indication.component';

describe('ContentAdviceIndicationComponent', () => {
  let component: ContentAdviceIndicationComponent;
  let fixture: ComponentFixture<ContentAdviceIndicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentAdviceIndicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentAdviceIndicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
