import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CacheService {
  has(page: number) {
    throw new Error('Method not implemented.');
  }
  private cache = new Map<string, { data: any; timestamp: number }>();
  private readonly CACHE_DURATION = 300000; // 5 دقائق

  get<T>(key: string): T | null {
    const cached = this.cache.get(key);
    if (!cached) return null;

    const isExpired = Date.now() - cached.timestamp > this.CACHE_DURATION;
    return isExpired ? null : cached.data;
  }

  set<T>(key: string, data: T): void {
    this.cache.set(key, { data, timestamp: Date.now() });
  }

  clear(key: string): void {
    this.cache.delete(key);
  }
}