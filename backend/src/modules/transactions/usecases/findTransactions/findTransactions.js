import { UserRepository } from "../../../users/repositories/UsersRepository.js";
//import { TransactionsRepository} from "../../repositories/TransactionsRepository.js";
import { AppException } from "../../../../application/errors/AppException.js";
import { prisma } from "../../../../application/database/prismaClient.js";

export class FindTransactionByQuery {
    /* constructor() {
        this.usersRepository = UserRepository.getInstance();
        this.transactionsRepository = TransactionsRepository.getInstance();
    }
 */

    async execute(username) {
        await prisma.$connect();

        const user = await prisma.users.findUnique(username);
        const transactionFind = this.transactions.findMany();

        if (!user || !transactionFind) {
            throw new AppException(404, "Transaction or User not Found");
        }

        const transactions = user || transactionFind;

        await prisma.$disconnect();

        return transactions;

    }
}