import { response } from "express";
import { ListTransactions } from "./listTransactions.js";

export class listTransactionsController {
    constructor() {
        this.listTransactions = new ListTransactions();
    }

    async handle(request, response) {
        const transactions = await this.listTransactions.execute();

        return response.json(transactions);
    }
}