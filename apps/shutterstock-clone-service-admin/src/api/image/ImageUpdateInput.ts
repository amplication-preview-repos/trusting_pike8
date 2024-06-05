import { PurchaseUpdateManyWithoutImagesInput } from "./PurchaseUpdateManyWithoutImagesInput";

export type ImageUpdateInput = {
  description?: string | null;
  purchases?: PurchaseUpdateManyWithoutImagesInput;
  title?: string | null;
  uploadedBy?: string | null;
  url?: string | null;
};
