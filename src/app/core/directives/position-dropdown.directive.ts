import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appPositionDropdown]',
  standalone: true,
})
export class PositionDropdownDirective implements OnInit {
  private readonly _elementRef = inject(ElementRef);

  ngOnInit(): void {
    this.positionDropdown();
  }

  positionDropdown() {
    const dropdownElement = this._elementRef.nativeElement;
    const parentElement = dropdownElement.parentElement;
    const dropdownRect = dropdownElement.getBoundingClientRect();
    const parentRect = parentElement.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    console.log({ dropdownRect, parentRect, viewportWidth });

    // Calculamos la posición ideal del dropdown
    let idealPosition =
      parentRect.left + (parentRect.width - dropdownRect.width) / 2;

    // Ajustamos la posición del dropdown si se desborda horizontalmente
    if (idealPosition < 0) {
      // Si se desborda hacia la izquierda
      idealPosition = 0;
    } else if (idealPosition + dropdownRect.width > viewportWidth) {
      // Si se desborda hacia la derecha
      idealPosition = viewportWidth - dropdownRect.width;
    }

    // Asignamos la posición al dropdown
    dropdownElement.style.left = `${idealPosition}px`;
  }

  @HostListener('window:resize')
  onResize() {
    this.positionDropdown();
  }
}
