import { CommonModule } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import {
  LayoutDashboard,
  MapPin,
  CreditCard,
  Settings,
  LucideAngularModule,
  House,
} from 'lucide-angular';

@Component({
  selector: 'app-sidebar-component',
  imports: [RouterLink, CommonModule, RouterLinkActive, LucideAngularModule],
  templateUrl: './sidebar-component.html',
  standalone: true,
})
export class SidebarComponent {
  isOpen = input<boolean>(true);
  closeSidebar = output<void>();

  private router = inject(Router);

  activeRoute: string = '';

  readonly House = House;
  readonly LayoutDashboard = LayoutDashboard;
  readonly MapPin = MapPin;
  readonly CreditCard = CreditCard;
  readonly Settings = Settings;

  constructor() {
    this.router.events.subscribe(() => {
      this.activeRoute = this.router.url;
    });
  }

  menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', route: '/' },
    { icon: MapPin, label: 'Locations', route: '/locations' },
    { icon: CreditCard, label: 'Subscription Types', route: '/subscription-types' },
    { icon: Settings, label: 'Settings', route: '/settings' }
  ];

  onItemClick() {
    if (window.innerWidth < 1024) {
      this.closeSidebar.emit();
    }
  }
}
