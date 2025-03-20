// loader.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  template: `
    <div class="loading-container">
      <mat-progress-spinner
        diameter="50"
        mode="indeterminate"
        color="primary"
      ></mat-progress-spinner>
    </div>
  `,
  styles: [
    `
      .loading-container {
        display: flex;
        justify-content: center;
        padding: 2rem;
      }
    `,
  ],
})
export class LoaderComponent {}