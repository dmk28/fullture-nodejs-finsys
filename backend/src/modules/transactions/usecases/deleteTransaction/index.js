import { TransactionsRepository } from "../../repositories/TransactionsRepository.js";
import { DeleteTransaction } from "./deleteTransactions.js";
import { DeleteTransactionController } from "./deleteTransactionsController.js";

const transactionsRepository = TransactionsRepository.getInstance();

const deleteTransactions = new DeleteTransaction(transactionsRepository);

const deleteTransactionsController = new DeleteTransactionController(deleteTransactions);

export {deleteTransactionsController};