import { Component } from '@angular/core';

@Component({
  selector: 'app-email-requests',
  imports: [],
  standalone: true,
  templateUrl: './email-requests.component.html',
  styleUrl: './email-requests.component.css',
})
export class EmailRequestsComponent {
  showSecondUpload = false;

  addUploadField() {
    this.showSecondUpload = true;
  }

  removeUploadField() {
    this.showSecondUpload = false;
  }
}
