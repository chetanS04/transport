import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SweetAlertService {
  constructor() {}

  // Confirmation dialog for delete actions
  async confirmDelete(message: string): Promise<any> {
    // Simple confirmation using native browser confirm
    // You can replace this with SweetAlert2 library if needed
    return new Promise((resolve) => {
      const result = window.confirm(message);
      resolve({ isConfirmed: result });
    });
  }

  // Show toast notification
  showToast(message: string, icon: 'success' | 'error' | 'warning' | 'info', duration: number): void {
    // Simple alert - you can replace with a better toast library
    console.log(`[${icon.toUpperCase()}] ${message}`);
    
    // Create a simple toast element
    const toast = document.createElement('div');
    toast.className = `fixed top-4 right-4 z-[9999] px-6 py-3 rounded-lg shadow-lg text-white font-medium transition-all duration-300 ${
      icon === 'success' ? 'bg-green-500' :
      icon === 'error' ? 'bg-red-500' :
      icon === 'warning' ? 'bg-yellow-500' :
      'bg-blue-500'
    }`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => document.body.removeChild(toast), 300);
    }, duration);
  }
}
