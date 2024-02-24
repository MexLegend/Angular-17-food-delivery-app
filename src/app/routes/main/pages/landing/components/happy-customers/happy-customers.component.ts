import { Component, WritableSignal, signal } from '@angular/core';
import { IUser } from '@models/user.interface';
import { CUSTOMERS } from '@constants/customers.constant';
import { NgOptimizedImage } from '@angular/common';
import { StarIconComponent } from 'app/icons/star-icon.component';

@Component({
  selector: 'app-happy-customers',
  standalone: true,
  imports: [NgOptimizedImage, StarIconComponent],
  templateUrl: './happy-customers.component.html',
  styleUrl: './happy-customers.component.scss',
})
export class HappyCustomersComponent {
  readonly customers: WritableSignal<IUser[]> = signal([...CUSTOMERS]);
}
