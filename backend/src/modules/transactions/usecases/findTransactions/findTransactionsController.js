import { FindTransactionByQuery } from "./findTransactions.js";

export class FindAllTransactionsController {
    constructor() {
        this.findTransactionByUseCase = new FindTransactionByQuery();
    }

    handle(request, response) {
        const {username} = request.params;

        const transactions = this.findTransactionByUseCase(username);

        return response.json(transactions);
    }
}