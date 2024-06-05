import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PurchaseUpdateInput = {
  amount?: number | null;
  image?: ImageWhereUniqueInput | null;
  paymentDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
