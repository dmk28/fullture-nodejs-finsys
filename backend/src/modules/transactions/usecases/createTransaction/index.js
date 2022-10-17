import { TransactionsRepository } from "../../../users/repositories/TransactionsRepository";
import { CreateTransaction } from "./createTransaction";
import {CreateTransactionController} from "./createTransactionController"

const TransactionsRepository = TransactionsRepository.getInstance();

const CreateTransaction = new CreateTransaction(TransactionsRepository);

const CreateTransactionController = new CreateUserController(CreateTransaction);

export {CreateTransactionController};

