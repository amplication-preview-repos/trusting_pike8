import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PurchaseWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  image?: ImageWhereUniqueInput;
  paymentDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
