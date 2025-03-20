import { createAction, props } from '@ngrx/store';
import { User } from '../core/services/user.service';

// إجراء لتحميل المستخدمين لصفحة معينة
export const loadUsers = createAction('[User] Load Users', props<{ page: number }>());

// يتم تشغيل الإجراء عند تحميل المستخدمين بنجاح
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: User[] }>());

// يتم تشغيل الإجراء عند حدوث خطأ في تحميل المستخدمين
export const loadUsersFailure = createAction('[User] Load Users Failure', props<{ error: string }>());

// إجراء لتحميل تفاصيل مستخدم واحد عن طريق المعرف
export const loadUserById = createAction('[User] Load User By ID', props<{ id: number }>());

// يتم تشغيل الإجراء عند تحميل تفاصيل المستخدم بنجاح
export const loadUserByIdSuccess = createAction('[User] Load User By ID Success', props<{ user: User }>());

//  يتم تشغيل الإجراء عند حدوث خطأ أثناء تحميل تفاصيل المستخدم
export const loadUserByIdFailure = createAction('[User] Load User By ID Failure', props<{ error: string }>());
