import {TransactionsRepository} from "../../repositories/TransactionsRepository.js";
import { CreateTransaction } from "./createTransaction.js";
import {CreateTransactionController} from "./createTransactionController.js"

const transactionsRepository = TransactionsRepository.getInstance();

const createTransaction = new CreateTransaction(transactionsRepository);

const createTransactionController = new CreateTransactionController(createTransaction);

export { createTransactionController };

