import { response } from "express";
import { listTransactions } from "./listTransactions";

export class listTransactionsController {
    constructor() {
        this.listTransactions = new listTransactions();
    }

    async handle(req, response) {
        const users = await this.listTransactions.execute();

        return response.json(users);
    }
}