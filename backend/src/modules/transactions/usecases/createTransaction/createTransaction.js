import { prisma } from "../../../../application/database/prismaClient.js";
import  {TransactionsRepository } from "../../repositories/TransactionsRepository.js";



export class CreateTransaction {
 /*    constructor() {
        this.transactionsRepository = TransactionsRepository.getInstance();

    } */

   async execute({title, type, category, amount}) {
    await prisma.$connect();
        
    
        const transaction = await prisma.transactions.create({
            title, 
            type, 
            category,
            amount,
            created: new Date()
        });
        return transaction;
    }
}