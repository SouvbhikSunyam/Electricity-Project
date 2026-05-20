import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../shared/services/api.service';
import { AuthService } from '../../../shared/services/auth.service';


@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent implements OnInit {

  customer: any = null;
  isLoading = false;
  errorMessage = '';

  isNoteModalOpen = false;
  noteCustomer: any= null;
  currentCustomerNotes: any[] = [];
  noteText = '';
  isSavingNote = false;

  isContactHistoryModalOpen = false;
  contactHistoryText = '';
  currentContactHistory: any[] = [];
  isSavingContactHistory = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.fetchCustomerDetails(id);
    }
  }

  fetchCustomerDetails(id: string): void {

    this.isLoading = true;

    const payload = {
      adminId: this.authService.getUserId(),
      id: Number(id)
    };

    this.api.post('admin/fetch-customer-details', payload).subscribe({

      next: (res: any) => {

        this.customer = res?.data || null;
        console.log(this.customer);        
        this.isLoading = false;
      },

      error: () => {

        this.errorMessage = 'Fehler beim Laden der Kundendetails';

        this.isLoading = false;
      }
    });
  }

  // NOTES
  openNoteModal(customer: any): void {
    this.noteCustomer = customer;
    this.currentCustomerNotes = customer.notes || [] ;
    this.isNoteModalOpen = true;
  }

  closeNoteModal(): void {
    this.isNoteModalOpen = false;
    this.noteText = '';
  }

  saveCustomerNote() : void {
    if (this.noteText.trim()) return;
    const newNote = {
      note: this.noteText,
      addedOn: new Date().toLocaleString()
    };
    this.currentCustomerNotes.unshift(newNote);
    this.noteText = '';

  }

  // CONTACT-HISTORY
  openContactHistoryModal(): void {
    this.isContactHistoryModalOpen = true;
    this.getContactHistory();
  }

  closeContactHistoryModal(): void {
    this.isContactHistoryModalOpen = false;
    this.contactHistoryText = '';
  }

  saveContactHistory(): void {
    if (!this.contactHistoryText.trim()) return;

    const newContactHistory = {
      note: this.contactHistoryText,
      addedOn: new Date().toLocaleString()
    };
    
    this.currentContactHistory.unshift(newContactHistory);
    this.contactHistoryText = '';
  }

  getContactHistory(): void {
    this.currentContactHistory = [];
  }

  formatDate(value?: number | string | null): string {
    if (value === null || value === undefined || value === '') {
      return '—';
    }

    const num = typeof value === 'number'
      ? value
      : Number(value);

    if (Number.isNaN(num)) {
      return String(value);
    }

    const ms = num < 1_000_000_000_000
      ? num * 1000
      : num;

    return new Intl.DateTimeFormat('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(new Date(ms));
  }

  goBack(): void {
    this.router.navigate(['/customers']);
  }

}