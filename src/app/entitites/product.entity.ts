
export interface IProduct {
  Id: number;
  Title: string;
  Price: number;
  InStock: boolean;
  Quantity: number;
  Color: string;
  Agency?: string;
  Image: string;
  PurchaseQuantity: number;
}
