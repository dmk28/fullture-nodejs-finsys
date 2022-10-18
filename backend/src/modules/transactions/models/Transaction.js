import {v4 as uuidV4} from "uuid";
import { User } from "../../users/models/User";

const idUserTransaction = User.id;
const userTransaction = User.name;

export class Transaction {
    title;
    idUserTransaction;
    type;
    transaction_id;
    amount;
    creation_date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4;
        }
    }
    
}