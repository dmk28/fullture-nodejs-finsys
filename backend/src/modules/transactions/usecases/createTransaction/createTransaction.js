import { prisma } from "../../../../application/database/PrismaClient.js";
//import  {TransactionsRepository } from "../../repositories/TransactionsRepository.js";



export class CreateTransaction {
 /*    constructor() {
        this.transactionsRepository = TransactionsRepository.getInstance();

    } */

   async execute({ title, type, category, amount }) {

    await prisma.$connect();
        
    
    const transaction = await prisma.transactions.create({
            data: {
                title, 
                type, 
                category,
                amount,
                created_at: new Date(),
            },
        });

    await prisma.$disconnect();

    return transaction;
    }
}