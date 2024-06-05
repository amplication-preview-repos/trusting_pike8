import { PurchaseCreateNestedManyWithoutImagesInput } from "./PurchaseCreateNestedManyWithoutImagesInput";

export type ImageCreateInput = {
  description?: string | null;
  purchases?: PurchaseCreateNestedManyWithoutImagesInput;
  title?: string | null;
  uploadedBy?: string | null;
  url?: string | null;
};
