import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent {
  shippingCost!: Observable<{ type: string; price: number }[]>;

  constructor(private cartSerivce: CartService) {}

  ngOnInit(): void {
    this.shippingCost = this.cartSerivce.getShippingPrices();
  }
}
