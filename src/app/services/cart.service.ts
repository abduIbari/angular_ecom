import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<Product[]>([])

  addToCart(product: Product) {
    console.log('Adding to cart:', product);
    this.cart.set([...this.cart(), product]);
}
    
  removeFromCart(id: number){
    this.cart.set(this.cart().filter((p) => p.id !== id))
}

}
