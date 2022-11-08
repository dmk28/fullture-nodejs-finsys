import { v4 as uuidV4 } from "uuid";

export class Transaction {
  id;
  title;
  type;
  category;
  amount;
  created_at;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

