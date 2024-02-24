import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-play-icon',
  standalone: true,
  template: `
    <svg
      [style.width.px]="size"
      [style.height.px]="size"
      viewBox="-0.5 0 7 7"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      fill="currentColor"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title>play [#1003]</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Dribbble-Light-Preview"
            transform="translate(-347.000000, -3766.000000)"
            fill="currentColor"
          >
            <g id="icons" transform="translate(56.000000, 160.000000)">
              <path
                d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322"
                id="play-[#1003]"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  `,
})
export class PlayIconComponent {
  @Input() size: number = 24;
}
