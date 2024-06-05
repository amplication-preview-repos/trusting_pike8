import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PurchaseCreateInput = {
  amount?: number | null;
  image?: ImageWhereUniqueInput | null;
  paymentDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
