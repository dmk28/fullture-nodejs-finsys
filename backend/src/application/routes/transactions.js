import Router, { response } from "express";

const transactionRoutes = Router(); 

import { createTransactionController } from "../../modules/transactions/usecases/createTransaction/index.js";
import { ListTransactionController } from "../../modules/transactions/usecases/listTransactions/index.js";
//import  {transactionQueryController} from "../../modules/transactions/usecases/findTransactions/index.js";
import {deleteTransactionsController} from "../../modules/transactions/usecases/deleteTransaction/index.js";
import {updateTransactionsController} from "../../modules/transactions/usecases/updateTransaction/index.js"
transactionRoutes.post("/transactions", (request, response) => {
    return createTransactionController.handle(request, response);
})

transactionRoutes.get("/transactions", (request, response) => {
    return ListTransactionController.handle(request, response); 
})


/* transactionRoutes.get("/transactions", (request, response) => {
    return transactionQueryController.handle(request, response);
}) */

transactionRoutes.put("/:id", (request, response) => {
    return updateTransactionsController.handle(request, response);
})

transactionRoutes.delete("/:id", (request, response) => {
    return deleteTransactionsController.handle(request, response);
})
export default transactionRoutes;