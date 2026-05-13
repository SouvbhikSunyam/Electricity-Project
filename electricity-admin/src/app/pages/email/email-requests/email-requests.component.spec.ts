import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailRequestsComponent } from './email-requests.component';

describe('EmailRequestsComponent', () => {
  let component: EmailRequestsComponent;
  let fixture: ComponentFixture<EmailRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailRequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
