import { TransactionsRepository } from "../../repositories/TransactionsRepository.js";
import { updateTransaction } from "./updateTransactions.js";
import { UpdateTransactionController } from "./updateTransactionsController.js";


const transactionsRepository = TransactionsRepository.getInstance();
const UpdateTransaction = new updateTransaction(transactionsRepository);
const updateTransactionsController = new UpdateTransactionController(UpdateTransaction);

export {updateTransactionsController};