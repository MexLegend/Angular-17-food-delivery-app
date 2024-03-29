import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reviews-icon',
  standalone: true,
  template: `
    <svg
      class="ng-icon"
      [style.width.px]="size - 2"
      [style.height.px]="size - 2"
      viewBox="0 0 24 24"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <polygon
          class="cls-1"
          points="12 6.25 13.18 8.76 15.82 9.17 13.91 11.12 14.36 13.89 12 12.58 9.64 13.89 10.09 11.12 8.18 9.17 10.82 8.76 12 6.25"
        ></polygon>
        <path
          fill="none"
          stroke=""
          stroke="currentColor"
          stroke-miterlimit="10"
          stroke-width="1.91px"
          d="M18.68,1.48H5.32A3.82,3.82,0,0,0,1.5,5.3v9.54a3.82,3.82,0,0,0,3.82,3.82H9.14L12,21.52l2.86-2.86h3.82a3.82,3.82,0,0,0,3.82-3.82V5.3A3.82,3.82,0,0,0,18.68,1.48Z"
        ></path>
      </g>
    </svg>
  `,
})
export class ReviewsIconComponent {
  @Input() size: number = 24;
}
