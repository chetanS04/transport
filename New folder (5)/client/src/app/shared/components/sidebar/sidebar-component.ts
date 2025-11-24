import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { 
  LayoutDashboard, 
  Receipt, 
  Users, 
  Package, 
  Table, 
  BookOpen, 
  MessageCircle, 
  UsersRound, 
  Image, 
  Bell, 
  BarChart3, 
  Calendar, 
  Settings,
  TrendingUp,
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
  readonly Receipt = Receipt;
  readonly Users = Users;
  readonly Package = Package;
  readonly Table = Table;
  readonly BookOpen = BookOpen;
  readonly MessageCircle = MessageCircle;
  readonly UsersRound = UsersRound;
  readonly Image = Image;
  readonly Bell = Bell;
  readonly BarChart3 = BarChart3;
  readonly Calendar = Calendar;
  readonly Settings = Settings;
  readonly TrendingUp = TrendingUp;

  menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', route: '/' },
    { icon: Receipt, label: 'Transactions', route: '/transactions' },
    { icon: Users, label: 'Customers', route: '/customers' },
    { icon: Package, label: 'Products', route: '/products' },
    { icon: Table, label: 'Tables', route: '/tables' },
    { icon: BookOpen, label: 'Blog', route: '/blog' },
    { icon: MessageCircle, label: 'Chat', route: '/chat' },
    { icon: UsersRound, label: 'Team', route: '/team' },
    { icon: Image, label: 'Gallery', route: '/gallery' },
    { icon: Bell, label: 'Alerts', route: '/alerts' },
    { icon: BarChart3, label: 'Charts', route: '/charts' },
    { icon: Calendar, label: 'Calendar', route: '/calendar' },
    { icon: TrendingUp, label: 'Analytics', route: '/analytics' },
    { icon: Settings, label: 'Settings', route: '/settings' }
  ];

  onItemClick() {
    if (window.innerWidth < 1024) {
      this.closeSidebar.emit();
    }
  }
}
