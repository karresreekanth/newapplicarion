
export class UserloginData
{
  Email: string = "";
  Password: string = "";
}

export class User {
  userName: string = '';
  email: string = '';
  passwordHash: string = '';
  roleId: number = 0;
  createdAt: string = '';
}


export class Role {
  RoleId: number = 0;
  RoleName: string = "";
}
export class ApiResponse<T> {
  entity!: T;
  isSuccess!: boolean;
  message?: string;
  statusCode?: string;
  status?: string;
  response?: any;
}
