import { Cat } from "src/cats/domain/dtos/cat.dto";

export class User {
  identity_type: string;
  identity_number: string;
  name: string;
  phoneNumber: string;
  address: string;
  cats: Cat[];

  constructor() {}
}
