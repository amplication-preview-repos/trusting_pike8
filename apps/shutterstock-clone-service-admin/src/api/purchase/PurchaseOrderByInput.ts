import { SortOrder } from "../../util/SortOrder";

export type PurchaseOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  imageId?: SortOrder;
  paymentDate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
