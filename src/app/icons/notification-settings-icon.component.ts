import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification-settings-icon',
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
        <defs>
          <style>
            .cls-1 {
              fill: none;
              stroke: currentColor;
              stroke-miterlimit: 10;
              stroke-width: 1.91px;
            }
          </style>
        </defs>
        <path
          class="cls-1"
          d="M18.68,1.48H5.32A3.82,3.82,0,0,0,1.5,5.3v9.54a3.82,3.82,0,0,0,3.82,3.82H9.14L12,21.52l2.86-2.86h3.82a3.82,3.82,0,0,0,3.82-3.82V5.3A3.82,3.82,0,0,0,18.68,1.48Z"
        ></path>
        <circle class="cls-1" cx="12" cy="10.07" r="2.86"></circle>
        <line class="cls-1" x1="12" y1="7.2" x2="12" y2="5.3"></line>
        <line class="cls-1" x1="12" y1="7.2" x2="12" y2="5.3"></line>
        <line class="cls-1" x1="12" y1="14.84" x2="12" y2="12.93"></line>
        <line class="cls-1" x1="9.52" y1="8.64" x2="7.87" y2="7.68"></line>
        <line class="cls-1" x1="9.52" y1="8.64" x2="7.87" y2="7.68"></line>
        <line class="cls-1" x1="16.13" y1="12.45" x2="14.48" y2="11.5"></line>
        <line class="cls-1" x1="14.48" y1="8.64" x2="16.13" y2="7.68"></line>
        <line class="cls-1" x1="14.48" y1="8.64" x2="16.13" y2="7.68"></line>
        <line class="cls-1" x1="7.87" y1="12.45" x2="9.52" y2="11.5"></line>
      </g>
    </svg>
  `,
})
export class NotificationSettingsIconComponent {
  @Input() size: number = 24;
}
