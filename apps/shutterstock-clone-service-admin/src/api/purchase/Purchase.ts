import { Image } from "../image/Image";
import { User } from "../user/User";

export type Purchase = {
  amount: number | null;
  createdAt: Date;
  id: string;
  image?: Image | null;
  paymentDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
