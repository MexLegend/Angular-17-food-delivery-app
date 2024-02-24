import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cherry-icon',
  standalone: true,
  template: `
    <svg
      [style.width.px]="size"
      [style.height.px]="size"
      viewBox="0 0 1024 1024"
      class="icon"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M883.2 629.333333c-87.466667-264.533333-288-70.4-288-70.4s-27.733333 2.133333-59.733333 12.8c-68.266667-66.133333-196.266667-25.6-196.266667-25.6s-236.8-78.933333-209.066667 185.6c12.8 113.066667 100.266667 185.6 221.866667 185.6 61.866667 0 115.2-19.2 153.6-51.2 64 57.6 157.866667 68.266667 251.733333 25.6 115.2-51.2 162.133333-153.6 125.866667-262.4z"
          fill="#FF1744"
        ></path>
        <path
          d="M633.6 753.066667c-8.533333-83.2 57.6-234.666667 113.066667-262.4-76.8-2.133333-151.466667 68.266667-151.466667 68.266666s-25.6 2.133333-57.6 12.8c-2.133333-2.133333-4.266667-2.133333-6.4-2.133333 29.866667 27.733333 49.066667 78.933333 40.533333 162.133333-6.4 55.466667-29.866667 100.266667-66.133333 132.266667 32 29.866667 108.8 85.333333 251.733333 27.733333-66.133333-12.8-115.2-55.466667-123.733333-138.666666z"
          fill="#D50000"
        ></path>
        <path
          d="M215.466667 744.533333c-8.533333 0-19.2-6.4-21.333334-17.066666-21.333333-87.466667 29.866667-123.733333 51.2-136.533334 10.666667-6.4 23.466667-2.133333 27.733334 8.533334 6.4 10.666667 2.133333 23.466667-8.533334 27.733333-21.333333 10.666667-42.666667 34.133333-29.866666 87.466667 2.133333 10.666667-4.266667 23.466667-14.933334 25.6-2.133333 4.266667-2.133333 4.266667-4.266666 4.266666z"
          fill="#FFCDD2"
        ></path>
        <path
          d="M614.4 518.4c-2.133333-6.4-4.266667-10.666667-6.4-17.066667 0-2.133333-2.133333-4.266667-2.133333-6.4-2.133333-4.266667-2.133333-8.533333-4.266667-10.666666-2.133333-4.266667-2.133333-6.4-4.266667-10.666667s-2.133333-6.4-2.133333-10.666667c-2.133333-4.266667-2.133333-8.533333-4.266667-10.666666-2.133333-4.266667-2.133333-8.533333-4.266666-12.8 0-2.133333-2.133333-4.266667-2.133334-6.4-2.133333-4.266667-2.133333-8.533333-2.133333-12.8 0-2.133333 0-4.266667-2.133333-6.4 0-4.266667-2.133333-8.533333-2.133334-12.8 0-2.133333 0-4.266667-2.133333-6.4 0-4.266667-2.133333-8.533333-2.133333-12.8v-4.266667-12.8-6.4-12.8-4.266667-12.8-4.266666-10.666667-6.4-8.533333-6.4-6.4c0-2.133333 0-4.266667 2.133333-8.533334v-4.266666c0-2.133333 2.133333-6.4 2.133333-8.533334v-4.266666c0-4.266667 2.133333-6.4 2.133334-10.666667v-2.133333c0-4.266667 2.133333-6.4 2.133333-10.666667 12.8-44.8 34.133333-74.666667 42.666667-85.333333 2.133333 0 4.266667-2.133333 4.266666-2.133334 10.666667-4.266667 14.933333-17.066667 10.666667-27.733333s-10.666667-19.2-21.333333-14.933333c0 0-2.133333 0-2.133334 2.133333-2.133333 0-4.266667 0-6.4 2.133333-2.133333 0-2.133333 2.133333-4.266666 4.266667C309.333333 249.6 320 573.866667 320 576c0 10.666667 10.666667 21.333333 21.333333 21.333333 12.8 0 21.333333-10.666667 21.333334-21.333333 0-2.133333-8.533333-249.6 196.266666-388.266667-32 78.933333-57.6 215.466667 40.533334 398.933334 4.266667 6.4 10.666667 10.666667 19.2 10.666666 4.266667 0 6.4 0 10.666666-2.133333 8.533333-4.266667 12.8-12.8 10.666667-21.333333 0-2.133333-2.133333-6.4-2.133333-8.533334-4.266667-8.533333-8.533333-17.066667-12.8-23.466666v-2.133334c-4.266667-6.4-8.533333-14.933333-10.666667-21.333333z"
          fill="#795548"
        ></path>
        <path
          d="M810.666667 384c-38.4-40.533333 61.866667-277.333333-192-277.333333-145.066667 281.6 192 277.333333 192 277.333333z"
          fill="#4CAF50"
        ></path>
      </g>
    </svg>
  `,
})
export class CherryIconComponent {
  @Input() size: number = 24;
}