import { Timestamp } from "firebase/firestore";

export type OrderPlacedProductDetailsType = {
  id: number;
  quantity: number;
  unitPrice: number;
};

export interface OrderPlacedType {
  createdAt: Timestamp;
  docId: string;
  orderId: string;
  products: OrderPlacedProductDetailsType[];
  totalPaid: number;
}
