interface IID {
  id: number | string;
}

export interface IAddress {
  street: string;
  city: string;
  zipcode: string;
}

export interface IUser extends IID {
  name: string;
  email: string;
  address: IAddress;
}

export interface ITodo extends IID {
  title: string;
  completed: boolean;
}
