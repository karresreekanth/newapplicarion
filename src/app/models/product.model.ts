

export class Product {
  userid: number = 0;
  productId: number = 0;
  productName: string = '';
  description: string = '';
  price: number = 0;
  stock: number = 0;
  imageUrl: string = '';
  categoryId?: number;
  createdAt: string = ''
 

}

export class ProductCategories {
  categoryId: number = 0;
  categoryName: string = "";

}

export class CartItem { }
export class OrderItem { }

export class ApiResponse<T> {
  entity!: T;
  isSuccess!: boolean;
  message?: string;
  statusCode?: string;
  status?: string;
  response?: any;
}
