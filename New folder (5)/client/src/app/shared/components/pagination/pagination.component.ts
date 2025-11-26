import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ChevronLeft, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
      <div class="flex justify-between flex-1 sm:hidden">
        <button
          (click)="onPageChange(currentPage() - 1)"
          [disabled]="currentPage() === 1"
          class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
          Previous
        </button>
        <button
          (click)="onPageChange(currentPage() + 1)"
          [disabled]="currentPage() === totalPages()"
          class="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
          Next
        </button>
      </div>
      <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p class="text-sm text-gray-700">
            Showing
            <span class="font-medium">{{ startItem() }}</span>
            to
            <span class="font-medium">{{ endItem() }}</span>
            of
            <span class="font-medium">{{ total() }}</span>
            results
          </p>
        </div>
        <div>
          <nav class="relative z-0 inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <button
              (click)="onPageChange(currentPage() - 1)"
              [disabled]="currentPage() === 1"
              class="relative inline-flex cursor-pointer items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
              <lucide-icon [img]="ChevronLeftIcon" [size]="20"></lucide-icon>
            </button>

            @for (page of getPageNumbers(); track page) {
              @if (page === '...') {
                <span class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300">
                  ...
                </span>
              } @else {
                <button
                  (click)="onPageChange(page)"
                  [class]="page === currentPage() 
                    ? 'relative inline-flex cursor-pointer items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 hover:bg-blue-700'
                    : 'relative inline-flex items-center cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'">
                  {{ page }}
                </button>
              }
            }

            <button
              (click)="onPageChange(currentPage() + 1)"
              [disabled]="currentPage() === totalPages()"
              class="relative cursor-pointer inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
              <lucide-icon [img]="ChevronRightIcon" [size]="20"></lucide-icon>
            </button>
          </nav>
        </div>
      </div>
    </div>
  `
})
export class PaginationComponent {
  currentPage = input.required<number>();
  totalPages = input.required<number>();
  total = input.required<number>();
  pageSize = input.required<number>();

  pageChange = output<number>();

  readonly ChevronLeftIcon = ChevronLeft;
  readonly ChevronRightIcon = ChevronRight;

  startItem() {
    return (this.currentPage() - 1) * this.pageSize() + 1;
  }

  endItem() {
    const end = this.currentPage() * this.pageSize();
    return end > this.total() ? this.total() : end;
  }

  onPageChange(page: number | string) {
    if (typeof page === 'number' && page >= 1 && page <= this.totalPages()) {
      this.pageChange.emit(page);
    }
  }

  getPageNumbers(): (number | string)[] {
    const pages: (number | string)[] = [];
    const current = this.currentPage();
    const total = this.totalPages();

    if (total <= 7) {
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (current > 3) {
        pages.push('...');
      }

      const start = Math.max(2, current - 1);
      const end = Math.min(total - 1, current + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (current < total - 2) {
        pages.push('...');
      }

      pages.push(total);
    }

    return pages;
  }
}
