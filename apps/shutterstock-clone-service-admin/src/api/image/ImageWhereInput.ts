import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PurchaseListRelationFilter } from "../purchase/PurchaseListRelationFilter";

export type ImageWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  purchases?: PurchaseListRelationFilter;
  title?: StringNullableFilter;
  uploadedBy?: StringNullableFilter;
  url?: StringNullableFilter;
};
