import {v4 as uuidV4} from "uuid";
import { User } from "./User";

const idUserTransaction = User.id;
const userTransaction = User.name;

export class Transaction {
    idUserTransaction;
    userTransaction;
    transaction_id;
    amount;
    value;
    create_id;

    constructor() {
        if (!this.id) {
            this.id = uuidV4;
        }
    }
    
}