import { TransactionsRepository } from "../../repositories/TransactionsRepository.js";

export class ListTransactions{
    
    constructor() {
        this.TransactionsRepository = TransactionsRepository.getInstance(); 

    }

    async execute() {
        const transactions = await this.TransactionsRepository.list();

        if (!transactions) {
            throw  new AppException(404, "Transaction Does Not Exist");
        }

        return transactions;
    }
}