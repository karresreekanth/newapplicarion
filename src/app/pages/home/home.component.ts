import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ProductService } from '../../services/product.service';
import { Product, ProductCategories } from '../../models/product.model';
import { CartService } from '../../services/cart.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  role: string | null = null;
  products: Product[] = [];
  productcategoriess: ProductCategories[] = [];
  selectedCategoryId: number = 0;
  userId: number = 0;


  constructor(
    private userservice: UserService,
    private router: Router,
    private productservice: ProductService,
    private cartservice: CartService
  ) { }

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllProducts();
    this.getUserRole();

    const storedId = localStorage.getItem('userId');
    this.userId = storedId ? Number(storedId) : 0;

    console.log('User ID:', this.userId);

  }

  getUserRole() {
    this.role = localStorage.getItem('role');
    console.log('User role:', this.role);
    alert(`User role: ${this.role}`);
  }

  getAllCategories() {
    this.productservice.getProductCategory().subscribe(result => {
      this.productcategoriess = result.entity;
      console.log('Categories:', this.productcategoriess);
    });
  }

  getAllProducts() {
    this.productservice.getProduct().subscribe(result => {
      this.products = result.entity;
      console.log('All Products:', this.products);
    });
  }

  filterByCategory() {
    if (this.selectedCategoryId > 0) {
      this.productservice.getProductCategoryid(this.selectedCategoryId).subscribe(result => {
        this.products = result.entity;
        console.log(`Products in category ${this.selectedCategoryId}:`, this.products);
      });
    }
  }

  serverdata: any[] = []


  viewDetails(productid?: number, categoryId?: number): void {
    if (productid && categoryId) {
      this.productservice.getProductDetailes(productid, categoryId).subscribe(res => {
        if (res.entity) {
          this.serverdata = res.entity; // No need to wrap in an array
          console.log(this.serverdata, "1111")

        }
      });
    }
  }



  cart: Array<Product & { quantity: number }> = [];

  addToCart(product: Product) {
    const existing = this.cart.find(p => p.productId === product.productId);
    if (existing) {
      existing.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }


  removeFromCart(productId: number) {
    this.cart = this.cart.filter(p => p.productId !== productId);
  }

  removeitemdata: any[] = [];

  dart: any[] = [];
  data: Product = {
    userid: 0,
    productId: 0,
    productName: '',
    description: '',
    price: 0,
    stock: 0,
    imageUrl: '',
    createdAt: ''
  }
  count: number=0;
  goToCart(productid: number) {
    this.data.userid = this.userId;
    this.data.categoryId = this.selectedCategoryId;
    this.data.productId = productid
    const newquantity = this.count + 1;
    this.cartservice.addItemToCartdetailes(this.data.userid, this.data.productId, newquantity).subscribe(res => {
      this.dart = res.entity;
    })
    if (this.dart.length > 0) {
      this.router.navigate(['/cart']).then(() => {
        setTimeout(() => {
          const modalTrigger = document.getElementById('cartModalTrigger');
          if (modalTrigger) {
            modalTrigger.click();  // Simulate modal activation
          }
        }, 500);
      });
}
   
  }
}
