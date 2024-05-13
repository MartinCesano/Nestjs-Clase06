export interface IProductEntity {
  name: string;
  price: number;
  productType: IProductTypeEntity[];
  brand: IBrandEntity[];
  color: string;
  size: string;
}

export interface IBrandEntity {
  name: string;
  type: string;
  country: string;
}

export interface IProductTypeEntity {
  id: number;
  name: string;
  products: IProductEntity[];
}