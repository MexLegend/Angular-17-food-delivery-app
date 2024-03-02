import {
  AfterViewInit,
  Component,
  Input,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import * as Icons from './icons.index';

@Component({
  selector: 'app-ng-icon',
  standalone: true,
  template: `<div [style.width.px]="size" [style.height.px]="size">
    <ng-template #iconContainer />
  </div>`,
})
export class NgIconComponent implements AfterViewInit {
  @ViewChild('iconContainer', { read: ViewContainerRef })
  iconContainerRef!: ViewContainerRef;

  @Input({ required: true }) iconName!: string;
  @Input() size: number = 24;

  ngAfterViewInit(): void {
    this._loadIconComponent();
  }

  private _loadIconComponent(): void {
    const safeIconName = this._getSafeIconName();

    const iconComponent: Type<any> = (Icons as any)[safeIconName];

    this.iconContainerRef.clear();
    const componentRef = this.iconContainerRef.createComponent(iconComponent);
    componentRef.instance.size = this.size;
  }

  private _getSafeIconName(): string {
    return `${this.iconName
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
      .join('')}IconComponent`;
  }
}
