import { updateTransaction } from "./updateTransactions.js";


export class UpdateTransactionController {
    constructor() {
        this.updateTransaction = new updateTransaction();
        
    }

    handle(request, response) {
        const {id} = request.params;
        const {title, type, category, amount} = request.body;

        this.updateTransaction.execute({
            id,
            title,
            type,
            category,
            amount
        });

        return response.status(204).send();
    }
}