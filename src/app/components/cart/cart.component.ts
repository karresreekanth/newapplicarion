import { Component } from '@angular/core';
import { Cart, CartItem, Product, User } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  userId: number = 0;
  cart: any[] = [];
  constructor(private cartService: CartService,private router: Router) { }
  ngOnInit(): void {
    const storedId = localStorage.getItem('userId');
    this.userId = storedId ? Number(storedId) : 0;
    this.loadCart();
  }
 

  carts: Cart = {
      cartId: 0
  }
  cartitem: CartItem = {
      productId: 0,
      productName: '',
      price: 0,
      quantity: 0,
      imageUrl: '',
      userId: 0,
      cartId: 0
  }
  user: User = {
      userId: 0
  }
  product: Product = {
      productId: 0,
      productName: '',
      price: 0,
      stock: 0,
      imageUrl: '',
      cartId: 0
  }
  loadCart() {
    this.cartService.getCarts(this.userId).subscribe(res => {
      if (res && res.entity) {
        this.cart = res.entity;
        alert(this.cart)
        console.log(this.cart,"data 49");
        alert(this.userId);
        console.log(this.userId);

      }
    });
  }
  count: number = 0;
  increaseQuantity(productId: number) {
    
    debugger;
    this.cartitem.userId = this.userId;
    console.log(this.cartitem.userId);
    const newQuantity = this.count +1;
    const item = this.cart.find(i => i.productId === productId);
    if (item) {
      this.cartService.addItemToCart(this.cartitem.userId, productId, newQuantity).subscribe(res => {
        this.cart = res.entity;
      });
    }
  }
  decresecount:number=0
  decreaseQuantity(productId: number) {
    debugger;
    this.cartitem.userId = this.userId;
    const item = this.cart.find(i => i.productId === productId);
    //alert(this.cart)
    if (item && item.quantity > 1) {
      const newQuantity = this.decresecount + 1;
      this.cartService.RemoveTtemtoCart(this.cartitem.userId, productId, newQuantity).subscribe(res => {
        this.cart = res.entity;
      });
    }
  }

  removeFromCart(productId: number ,cartid:number)
  {
    this.cartService.removeItemFromCart(this.userId, productId, cartid).subscribe(res => {
      this.cart = res.entity;
      this.loadCart();
    });
    
  }

  getTotalAmount(): number {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  checkoutCart(): void {
    if (this.cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    const confirmed = confirm('Proceed to checkout?');
    if (confirmed) {
      // Pass cart via state (or use a shared service if preferred)
      this.router.navigate(['/checkout'], {
        state: { cart: this.cart, total: this.getTotalAmount() }
      });
    }
  }


}

