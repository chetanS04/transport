import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { 
  LayoutDashboard, 
  MapPin,
  CreditCard,
  Settings,
  LucideAngularModule
} from 'lucide-angular';

@Component({
  selector: 'app-sidebar-component',
  imports: [RouterLink, RouterLinkActive, LucideAngularModule],
  templateUrl: './sidebar-component.html',
  standalone: true,
})
export class SidebarComponent {
  isOpen = input<boolean>(true);
  closeSidebar = output<void>();

  readonly LayoutDashboard = LayoutDashboard;
  readonly MapPin = MapPin;
  readonly CreditCard = CreditCard;
  readonly Settings = Settings;

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
