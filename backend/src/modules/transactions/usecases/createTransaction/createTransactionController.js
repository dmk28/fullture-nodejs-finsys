import { response } from "express";
import { CreateTransaction } from "./createTransaction";

export class CreateTransactionController {
    constructor() {
        this.CreateTransaction = new CreateTransaction();
    }

    handle(request, response) {
        const {title, idUserTransaction, type, transaction_id,amount,creation_date} = request.body;

        const user = this.CreateTransaction.execute({
            title, 
            idUserTransaction, 
            type, 
            transaction_id,
            amount,
            creation_date
        });

        return response.json(user);
    }
}

