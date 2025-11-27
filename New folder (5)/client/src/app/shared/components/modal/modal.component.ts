import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-modal',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './modal.component.html',
})

export class ModalComponent {
    @Input() isOpen = false;
    @Input() title = '';
    @Input() width = 'max-w-xl';
    @Output() onClose = new EventEmitter<void>();

    closeModal() {
        this.onClose.emit();
    }
}
