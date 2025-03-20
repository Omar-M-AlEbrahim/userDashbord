import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectSelectedUser } from '../../store/user.selectors';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule,MatButton ,MatCardModule, MatIconModule],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  private store = inject(Store);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private dialogRef = inject(MatDialogRef<UserDetailsComponent>, { optional: true });

  user$: Observable<any> = this.store.select(selectSelectedUser);

  ngOnInit() {
    const userId = this.route.snapshot.params['id'];
    if (userId) {
      this.store.dispatch({ type: '[User] Load User By Id', id: userId });
    }
  }

  
  closeDialog() {
    if (this.dialogRef) {
      this.dialogRef.close(); 
    } else {
      this.router.navigate(['/']); 
    }
  }
}
