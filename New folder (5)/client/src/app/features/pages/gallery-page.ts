import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  template: `
    <div class="space-y-6">
      <div>
        <h1 class="text-2xl md:text-3xl font-bold text-gray-900">Gallery</h1>
        <p class="text-gray-600 mt-1">Media and image gallery</p>
      </div>
      
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <p class="text-gray-500">Gallery content goes here...</p>
      </div>
    </div>
  `
})
export class GalleryPageComponent {}
