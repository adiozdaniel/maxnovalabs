import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from "../../shared/section-title/section-title.component";

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule, SectionTitleComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;
  loading = false;
  success = false;
  error = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) return;

    this.loading = true;
    this.success = false;
    this.error = '';

    const formData = this.contactForm.value;

    this.http.post('/api/contact', formData).subscribe({
      next: () => {
        this.success = true;
        this.contactForm.reset();
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Something went wrong. Please try again.';
        this.loading = false;
      },
    });
  }
}
