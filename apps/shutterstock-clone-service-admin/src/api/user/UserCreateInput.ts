import { PurchaseCreateNestedManyWithoutUsersInput } from "./PurchaseCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  purchases?: PurchaseCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
