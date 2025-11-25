import { CommonModule } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { 
  LayoutDashboard, 
  MapPin,
  CreditCard,
  Settings,
  LucideAngularModule
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

  activeRoute = '';

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
    { icon: LayoutDashboard, label: 'Dashboard', route: '/my-dashboard' },
    { icon: MapPin, label: 'Locations', route: '/my-dashboard/locations' },
    { icon: CreditCard, label: 'Subscription Types', route: '/my-dashboard/subscription-types' },
    { icon: Settings, label: 'Settings', route: '/my-dashboard/settings' }
  ];

  onItemClick() {
    if (window.innerWidth < 1024) {
      this.closeSidebar.emit();
    }
  }
}
