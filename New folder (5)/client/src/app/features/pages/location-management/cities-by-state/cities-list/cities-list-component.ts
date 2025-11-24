import { Component, OnInit, signal, effect } from '@angular/core';
import { City } from '../../../../../shared/models/interface';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CitiesFormComponent } from '../cities-form/cities-form-component';
import { HighlightPipe } from '../../../../../shared/pipes/highlight.pipe';
import { StateCitiesService } from '../../../../../core/services/state-cities.service';
import { BreadcrumbComponent } from "../../../../../shared/components/breadcrumb/breadcrumb-component";
import { ConfirmationModalComponent } from '../../../../../shared/components/confirmation-modal/confirmation-modal.component';
import { PaginationComponent } from '../../../../../shared/components/pagination/pagination.component';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { LucideAngularModule, Plus, Edit, Trash2, Frown, X } from 'lucide-angular';

@Component({
  selector: 'app-cities-list-component',
  imports: [CommonModule,
    RouterModule,
    FormsModule,
    CitiesFormComponent,
    HighlightPipe,
    BreadcrumbComponent,
    ConfirmationModalComponent,
    PaginationComponent,
    LucideAngularModule],
  templateUrl: './cities-list-component.html',
  standalone: true,
})
export class CitiesListComponent implements OnInit {
  cities = signal<City[]>([]);
  state_id!: number;
  stateName = signal<string>('');
  search = signal<string>('');
  editModal = signal<City | null>(null);
  showCompletionModal = signal<boolean>(false);
  
  // Pagination
  currentPage = signal<number>(1);
  pageSize = signal<number>(10);
  totalItems = signal<number>(0);
  totalPages = signal<number>(0);
  
  // Delete confirmation modal
  showDeleteModal = signal<boolean>(false);
  cityToDelete = signal<number | null>(null);
  
  // Search with debounce
  private searchSubject = new Subject<string>();

  // Lucide icons
  readonly Plus = Plus;
  readonly Edit = Edit;
  readonly Trash2 = Trash2;
  readonly Frown = Frown;
  readonly X = X;

  // breadcrumb
  breadcrumbItems = [
    { label: 'Dashboard', link: '/' },
    { label: 'States', link: '/locations' },
    { label: '' },
  ];

  constructor(
    private route: ActivatedRoute,
    private cityService: StateCitiesService
  ) {
    this.state_id = Number(this.route.snapshot.paramMap.get('state_id'));
    
    // Setup debounced search
    this.searchSubject.pipe(debounceTime(300)).subscribe(() => {
      this.currentPage.set(1);
      this.getCitiesByState();
    });
  }

  ngOnInit(): void {
    this.getCitiesByState();
  }

  // get all cities by state
  getCitiesByState(): void {
    this.cityService.getAllCitiesByState(
      this.state_id,
      this.currentPage(),
      this.pageSize(),
      this.search()
    ).subscribe({
      next: (data: any) => {
        this.cities.set(data.cities);
        this.stateName.set(data?.stateName);
        this.totalItems.set(data.pagination.total);
        this.totalPages.set(data.pagination.totalPages);
        this.setBreadcrumb();
      },
      error: (e) => console.error(e),
    });
  }

  // Dynamically set the breadcrumb when stateName is available
  setBreadcrumb(): void {
    this.breadcrumbItems[2].label = `Cities - ${this.stateName()}`;
  }

  // search with debounce
  onSearchChange(value: string): void {
    this.search.set(value);
    this.searchSubject.next(value);
  }
  
  // pagination
  onPageChange(page: number): void {
    this.currentPage.set(page);
    this.getCitiesByState();
  }

  openModal(): void {
    this.editModal.set(null);
    this.showCompletionModal.set(true);
  }

  // close modal
  closeModal(e: boolean): void {
    this.showCompletionModal.set(false);
    if (e) {
      this.getCitiesByState();
    }
  }

  openEditModal(event: Event, city: City): void {
    event.stopPropagation();
    this.editModal.set(city);
    this.showCompletionModal.set(true);
  }

  // delete city by id
  confirmDelete(event: Event, city_id: number): void {
    event.stopPropagation();
    this.cityToDelete.set(city_id);
    this.showDeleteModal.set(true);
  }
  
  deleteCity(): void {
    const city_id = this.cityToDelete();
    if (city_id) {
      this.cityService.deleteCity(city_id).subscribe({
        next: () => {
          this.showDeleteModal.set(false);
          this.getCitiesByState();
        },
        error: (err) => {
          console.error('Error deleting city:', err);
          this.showDeleteModal.set(false);
        },
      });
    }
  }
  
  cancelDelete(): void {
    this.showDeleteModal.set(false);
    this.cityToDelete.set(null);
  }
}
