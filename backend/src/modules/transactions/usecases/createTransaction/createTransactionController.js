
import { CreateTransaction } from "./createTransaction.js";

export class CreateTransactionController {
    constructor() {
        this.createTransaction = new CreateTransaction();
    }

    handle(request, response) {
        const {title, type, category, amount} = request.body;

        const transaction  = this.createTransaction.execute({
            title, 
            type, 
            category,
            amount
            
        });

        response.statusCode = 201;
        return response.json(transaction)

    }
}

