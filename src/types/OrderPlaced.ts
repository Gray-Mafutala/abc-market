import { Timestamp } from "firebase/firestore";

export interface OrderPlacedType {
  createAt: Timestamp;
  orderId: string;
  product: {
    id: number;
    quantity: number;
    unitPrice: number;
  }[];
  totalPaid: number;
}
