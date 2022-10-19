import  {TransactionsRepository }  from "../../repositories/TransactionsRepository.js";
import { FindTransactionByQuery } from "./findTransactions.js";
import { FindAllTransactionsController } from "./findTransactionsController.js";

const transactionsRepository = TransactionsRepository.getInstance();
const transactionQuery = new FindTransactionByQuery(transactionsRepository)
const transactionQueryController = new FindAllTransactionsController(transactionQuery);

export {transactionQueryController}