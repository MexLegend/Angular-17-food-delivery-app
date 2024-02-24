import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-down-arrow-icon',
  standalone: true,
  template: `
    <svg
      [style.width.px]="size"
      [style.height.px]="size"
      viewBox="0 0 1024 1024"
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
        <path
          d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"
        ></path>
      </g>
    </svg>
  `,
})
export class DownArrowIconComponent {
  @Input() size: number = 24;
}
