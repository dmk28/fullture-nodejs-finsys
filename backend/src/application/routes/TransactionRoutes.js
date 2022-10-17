import Router from "express";

const transactionRoutes = Router();

import {createTransaction} from '../modules/transactions/usecases/createTransaction/index.js'
import {listTransactionsController} from '../modules/transactions/usecases/listTransactions/index.js'


//Transaction Route POST
transactionRoutes.post("/transactions", (req, res) => {
    return makeTransaction.handle(req, res);
});
//transaction Route GET
transactionRoutes.get("/transactions", (req, res) => {
    return listTransactions.handle(req,res);
});

export default transactionRoutes;