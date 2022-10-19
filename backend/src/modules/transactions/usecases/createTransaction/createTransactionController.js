
import { CreateTransaction } from "./createTransaction.js";
import { AppException } from "../../../../application/errors/AppException.js";
export class CreateTransactionController {
    constructor() {
        this.CreateTransaction = new CreateTransaction();
    }

    handle(request, response) {
        const {title, type, category, amount, creation_date} = request.body;

        const transaction  = this.CreateTransaction.execute({
            title, 
            type, 
            category,
            amount,
            creation_date
        });

        response.statusCode = 201;
        return response.json(transaction)

    }
}

