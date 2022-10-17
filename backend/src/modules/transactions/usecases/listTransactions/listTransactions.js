import { TransactionsRepository } from "../../repositories/TransactionsRepository.js";

export class listTransactions{
    
    constructor() {
        this.TransactionsRepository = TransactionsRepository.getInstance(); 

    }

    async execute() {
        const transactions = await this.TransactionsRepository.list();

        return transactions;
    }
}