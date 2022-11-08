//import { TransactionsRepository } from "../../repositories/TransactionsRepository.js";
import { prisma } from "../../../../application/database/PrismaClient.js";
import { AppException } from "../../../../application/errors/AppException.js";


export class ListTransactions{
    
  /*   constructor() {
        this.TransactionsRepository = TransactionsRepository.getInstance(); 

    } */

    async execute() {

        await prisma.$connect();

        const transactions = await prisma.transactions.findMany();

        if (!transactions.length) {
            throw  new AppException(404, "Transaction Does Not Exist");
        }

        await prisma.$disconnect();

        return transactions;
    }
}