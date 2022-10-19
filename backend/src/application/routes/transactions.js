import Router from "express";

const transactionRoutes = Router(); 

import { createTransactionController } from "../../modules/transactions/usecases/createTransaction/index.js";
import { ListTransactionController } from "../../modules/transactions/usecases/listTransactions/index.js";
import  {transactionQueryController} from "../../modules/transactions/usecases/findTransactions/index.js"

transactionRoutes.post("/transactions", (request, response) => {
    return createTransactionController.handle(request, response);
})

transactionRoutes.get("/transactions", (request, response) => {
    return ListTransactionController.handle(request, response); 
})


transactionRoutes.get("/transactions", (request, response) => {
    return transactionQueryController.handle(request, response);
})
export default transactionRoutes;