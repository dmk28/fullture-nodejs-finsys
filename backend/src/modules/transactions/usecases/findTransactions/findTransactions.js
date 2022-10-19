import { UserRepository } from "../../../users/repositories/UsersRepository.js";
import { TransactionsRepository} from "../../repositories/TransactionsRepository.js";
import { AppException } from "../../../../application/errors/AppException.js";

export class FindTransactionByQuery {
    constructor() {
        this.usersRepository = UserRepository.getInstance();
        this.transactionsRepository = TransactionsRepository.getInstance();
    }

    execute(username, transaction) {

        const user = this.usersRepository.findByUsername(username);
        const transactionFind = this.transactionsRepository.findById(transaction.id);

        if (!user && !transaction) {
            throw new AppException(404, "Transaction or User not Found");
        }

            const transactions = this.transactionsRepository.findAllById(transaction.id) && this.usersRepository.findByUsername(username);

            return transactions;

    }
}