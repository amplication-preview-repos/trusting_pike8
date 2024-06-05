import { PurchaseUpdateManyWithoutUsersInput } from "./PurchaseUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  purchases?: PurchaseUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
