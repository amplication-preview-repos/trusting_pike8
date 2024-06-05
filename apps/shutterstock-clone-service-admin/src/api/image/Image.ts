import { Purchase } from "../purchase/Purchase";

export type Image = {
  createdAt: Date;
  description: string | null;
  id: string;
  purchases?: Array<Purchase>;
  title: string | null;
  updatedAt: Date;
  uploadedBy: string | null;
  url: string | null;
};
