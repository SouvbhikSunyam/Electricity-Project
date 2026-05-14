import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailCategoryComponent } from './email-category.component';

describe('EmailCategoryComponent', () => {
  let component: EmailCategoryComponent;
  let fixture: ComponentFixture<EmailCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
