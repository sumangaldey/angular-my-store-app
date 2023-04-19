import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartServices.getItems();
  checkOutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartServices: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit() {
    this.items = this.cartServices.clearItems();
    console.warn('your order has been placed', this.checkOutForm.value);
    this.checkOutForm.reset();
  }
}
