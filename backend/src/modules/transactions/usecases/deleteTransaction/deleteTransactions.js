import { prisma } from "../../../../application/database/PrismaClient.js";
import { TransactionsRepository } from "../../repositories/TransactionsRepository.js";


export class DeleteTransaction {
    constructor() {
        this.transactionsRepository = TransactionsRepository.getInstance();
    }

    async execute(id) {
        //return this.transactionsRepository.deleteById(id)
        await prisma.$connect();

        const deleteTransaction = await prisma.transactions.delete({
            where : {
                id,
            },
        })
        await prisma.$disconnect();
        return deleteTransaction;

    }
}