import { TransactionsRepository } from "../../repositories/TransactionsRepository";
import { updateTransaction } from "./updateTransactions";
import { UpdateTransactionController } from "./updateTransactionsController";


const transactionsRepositry = new TransactionsRepository.getInstance();
const UpdateTransaction = new updateTransaction(transactionsRepositry);
const updateTransactionsController = new UpdateTransactionController(UpdateTransaction);

export {updateTransactionsController};