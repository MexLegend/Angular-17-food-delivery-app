import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-security-shield-icon',
  standalone: true,
  template: `
    <svg
      class="ng-icon"
      [style.width.px]="size - 2"
      [style.height.px]="size - 2"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M3 13V4.22222L4.94372 4.07224C6.6371 3.94158 8.29889 3.54213 9.86666 2.88889L12 2L14.1333 2.88889C15.7011 3.54213 17.3629 3.94158 19.0563 4.07224L21 4.22222V13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M8 12L10.5 14.5L16 9"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </g>
    </svg>
  `,
})
export class SecurityShieldIconComponent {
  @Input() size: number = 24;
}
