
export class CartItems {
  cartItemId: number=0;
  cartId?: number;
  productId?: number;
  quantity?: number;
  cart?: Cart;
  product?: Product;
}

export class Cart {
  cartId: number=0;
  userId?: number;
  createdAt?: Date;
  user?: User;
  cartItems?: CartItem[];
}
export class User {
  userId: number=0;
  userName?: string;
  email?: string;
  createdAt?: Date;
  // Add other fields if needed
}
export class Product {
  productId: number=0;
  productName: string="";
  price: number=0;
  stock: number=0;
  imageUrl: string="";
  categoryName?: string;
  description?: string;
  createdAt?: Date;
  cartId: number = 0;
}

export class CartItem {
  userId: number = 0;
  productId: number=0;
  productName: string="";
  price: number=0;
  quantity: number=0;
  imageUrl: string = "";
  cartId:number=0;
}
