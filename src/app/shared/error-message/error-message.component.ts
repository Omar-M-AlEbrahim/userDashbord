// error-message.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  template: `
    <mat-card *ngIf="error" class="error-card">
      <mat-card-content class="error-content">
        {{ error }}
        <button mat-raised-button color="warn" (click)="onRetry.emit()">
            Retry
        </button>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      .error-card {
        margin: 1rem;
        background-color: #ffebee;
      }
      .error-content {
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: space-between;
      }
    `,
  ],
})
export class ErrorMessageComponent {
  @Input() error: string | null = null;
  @Output() onRetry = new EventEmitter<void>();
}