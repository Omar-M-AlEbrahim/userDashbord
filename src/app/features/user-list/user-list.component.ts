import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  selectLoading,
  selectError,
  selectAllUsers,
  selectSelectedUser
} from '../../store/user.selectors';
import { loadUserById, loadUsers } from '../../store/user.actions';
import { LoaderComponent } from "../../shared/loader/loader.component";
import { MatDialog } from '@angular/material/dialog'; // ✅ إضافة الاستيراد الخاص بـ MatDialog
import { UserDetailsComponent } from "../user-details/user-details.component";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    LoaderComponent,
    // UserDetailsComponent
  ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private store = inject(Store);
  private dialog = inject(MatDialog); // ✅ إضافة `MatDialog` عبر الـ inject
  users$: Observable<any[]> = this.store.select(selectAllUsers);
  selectedUser$: Observable<any> = this.store.select(selectSelectedUser);
  loading$: Observable<boolean> = this.store.select(selectLoading);
  error$: Observable<string | null> = this.store.select(selectError);

  pageIndex = 0;
  pageSize = 5;
  totalUsers = 100;

  searchTerm: string = ''; //  قيمة البحث
  filteredUsers$: Observable<any[]> = this.users$;

  ngOnInit(): void {
    this.fetchUsers();
    this.applyFilter(); // فلترة عند البداية
    this.store.dispatch({ type: '[User] Load All Users' });
  }

  fetchUsers(page: number = 1) {
    this.store.dispatch(loadUsers({ page }));
  }

  //  فتح نافذة التفاصيل للمستخدم
  openUserDetails(userId: number) {
    this.store.dispatch(loadUserById({ id: userId }));

    this.dialog.open(UserDetailsComponent, {
      width: '450px',
      disableClose: false,
      panelClass: 'custom-dialog-container'
    });
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.fetchUsers(this.pageIndex + 1);
  }

  applyFilter() {
    this.filteredUsers$ = this.users$.pipe(
      map(users => users.filter(user =>
        user.first_name.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
        user.last_name.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
        user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
      ))
    );
  }
}
