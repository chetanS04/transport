import { Component, OnInit, signal } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar-component";
import { HeaderComponent } from "../../components/header/header-component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-component',
  imports: [SidebarComponent, HeaderComponent, RouterOutlet],
  templateUrl: './dashboard-component.html',
  standalone: true,
})
export class DashboardComponent implements OnInit {

  // Signal to store sidebar state
  sidebarOpen = signal(true);

  ngOnInit() {
    // Close sidebar by default on mobile (<1024px)
    if (window.innerWidth < 1024) {
      this.sidebarOpen.set(false);
    }
  }

  // Getter function for template
  isSidebarOpen() {
    return this.sidebarOpen();
  }

  // Toggle sidebar function
  toggleSidebar() {
    this.sidebarOpen.update(value => !value);
  }
}
