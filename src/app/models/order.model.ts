export class ApiResponse<T> {
  entity!: T;
  isSuccess!: boolean;
  message?: string;
  statusCode?: string;
  status?: string;
  response?: any;
}
export class Order {
  orderId: number=0;
  userId?: number;
  orderDate?: Date;
  totalAmount?: number;
  status?: string;
  user?: User;
  orderItems: OrderItem[]=[];

}

export class User {
  // Define user model based on your backend shape
  userId: number=0;
  name: string="";
  email: string="";
  // etc.
}

export class OrderItem {
  orderItemId: number=0;
  productId: number=0;
  quantity: number=0;
  price: number=0;
  productName?: string;
  // etc.
}


