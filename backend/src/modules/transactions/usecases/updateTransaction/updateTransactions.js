import { prisma } from "../../../../application/database/PrismaClient.js";


export class updateTransaction {
    

    async execute({id, title, type, category, amount}) {
        await prisma.$connect();


        const updateTransaction = await prisma.transactions.update({
            where: {
                id,
            },
            data: {
                title,
                type,
                category,
                amount
            },

        });

        await prisma.$disconnect();
        
        return updateTransaction;
    }
}